import React, { useEffect, useState } from 'react'
import { countries, states } from '../lib/countries';
import LoginFooter from '../Components/LoginFooter';
import { useRouter } from 'next/router';
import ComponentCheckout from '../Components/ComponentCheckout';
import LoginFirst from '../Components/LoginFirst';
import { useSelector } from 'react-redux';
import { collection, where, doc, getDocs, setDoc, query, deleteDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useDispatch } from 'react-redux';
import action from '../redux/action';

const Address = () => {
  const router = useRouter();
  const { loginUser } = useSelector(state => state);
  const [savedAddress, setSavedAddress] = useState([]);
  const dispatch = useDispatch();

  const [addressForm, setAddressForm] = useState({
    country: 'India',
    name: '',
    phone: '',
    pincode: '',
    house: '',
    street: '',
    landmark: '',
    town: '',
    state: 'Choose a state',
    default: false,
    addressType: 'Select an Address Type'
  });

  useEffect(() => {
    addressFormUpdate();
  }, [loginUser.logedIn]);

  const autofill = {
    "country": "India",
    "name": "Krishna Kumar",
    "phone": "9440095500",
    "pincode": "251236",
    "house": "05",
    "street": "Hallapur",
    "landmark": "Siv Mandir",
    "town": "Gorakhpur",
    "state": "UTTAR PRADESH",
    "default": false,
    "addressType": "Home (7 am – 9 pm delivery)",
    "checked": "on"
  }

  const handleAddressFormSubmit = async (e) => {
    e.preventDefault();
    if (loginUser.logedIn) {
      try {
        const addressRef = doc(collection(db, "address"));
        await setDoc(addressRef, {
          ...addressForm,
          _id: addressRef.id,
          user_id: loginUser.user._id
        });
        await addressFormUpdate();
        const addressRef1 = doc(db, "profile", loginUser.user._id);
        await setDoc(addressRef1, {
          address: {
            ...addressForm,
            _id: addressRef1.id,
            user_id: loginUser.user._id
          },
          user_id: loginUser.user._id
        }, { merge: true });
        dispatch(action({
          type: 'ADDRESS',
          address: {
            ...addressForm,
            _id: addressRef1.id,
            user_id: loginUser.user._id
          }
        }));
        router.push('/payment-process');
      } catch (error) {
        console.log('address not saved:', error);
      }
    }
  }

  const addressFormUpdate = async () => {
    try {
      if (loginUser.logedIn) {
        const q1 = query(collection(db, "address"), where("user_id", "==", loginUser.user._id));
        const q1Shapshot = await getDocs(q1);
        const q1Data = q1Shapshot.docs.map(a => a.data());
        setSavedAddress([...q1Data]);
      }
    } catch { }
  }

  const deleteAddress = async (_id) => {
    if (loginUser.logedIn) {
      try {
        await deleteDoc(doc(db, "address", _id));

        await addressFormUpdate();

      } catch (error) {
        console.log("Address removing faild:", error);
      }
    }
  }

  const handleUseAddress = async (addressForm) => {
    if (loginUser.logedIn) {
      const addressRef = doc(db, "profile", loginUser.user._id);
      await setDoc(addressRef, {
        address: {
          ...addressForm,
          user_id: loginUser.user._id
        },
        user_id: loginUser.user._id
      }, { merge: true });
      dispatch(action({
        type: 'ADDRESS',
        address: {
          ...addressForm,
          user_id: loginUser.user._id
        }
      }));
      router.push('/payment-process');
    }
  }

  return (<>
    {loginUser.logedIn &&
      <div className="address__box">
        <div className="address">
          <ComponentCheckout />
          <div className="address__container">
            <div className="address__heading__wrapper">
              <h3 className='address__heading'>Select a delivery address</h3>
              <span className='address__instruction'>Is the address you&apos;d like to use displayed below? If so, click the corresponding &quot;Deliver to this address&quot; button. Or you can <a className='hyperlink' href="#new-address">enter a new delivery address.</a></span>
            </div>
            <div className="address__already__row">
              {savedAddress.length >= 1 ? savedAddress.map((e, i) => (
                <div key={i} className="address__already__col">
                  <div>
                    <span className='address__already__name'>{e.name}</span>
                    <span>Mobile number: {e.phone}</span>
                    <span>{e.street}</span>
                    <span>{e.town}, {e.state} - {e.pincode}</span>
                    <span>{e.country}</span>
                    <button onClick={() => { handleUseAddress(e) }} className='amazon-btn'>Deliver to this address</button>
                    <div className="address__already__update">
                      <button>Edit</button>
                      <button onClick={() => deleteAddress(e._id)}>Delete</button>
                    </div>
                  </div>
                </div>)) :
                <div>All of your saved address will be displayed here.</div>
              }
            </div>
          </div>

          <div className="new__address__container">
            <div className="new__address__footer__border"></div>
            <div className="new__address__container__wrapper">
              <h3 className="new__address__heading">Add a new address</h3>
              <div className="new__address__autofill">
                <span>Save time. Autofill dummy address</span>
                <button onClick={e => setAddressForm(autofill)}>Autofill</button>
              </div>

              <form onSubmit={handleAddressFormSubmit} className='new__address__form'>
                <div className="new__address__form_col">
                  <label htmlFor="address-country">Country/Region</label>
                  <select id="address-country" value={addressForm.country} onChange={e => setAddressForm({ ...addressForm, country: e.target.value })}>
                    {countries.map((e, i) => (<option key={i} value={e}>{e}</option>))}
                  </select>
                </div>
                <div className="new__address__form_col">
                  <label htmlFor="address-name">Full name</label>
                  <input type="name" id='address-name' value={addressForm.name} onChange={e => setAddressForm({ ...addressForm, name: e.target.value })} />
                </div>
                <div className="new__address__form_col">
                  <label htmlFor="address-phone">Mobile number</label>
                  <input type="mobile" id='address-phone' value={addressForm.phone} onChange={e => setAddressForm({ ...addressForm, phone: e.target.value })} />
                </div>
                <div className="new__address__form_col">
                  <label htmlFor="address-pincode">Pin code</label>
                  <input type="mobile" id='address-pincode' value={addressForm.pincode} onChange={e => setAddressForm({ ...addressForm, pincode: e.target.value })} />
                </div>
                <div className="new__address__form_col">
                  <label htmlFor="address-house">Flat, House no., Building, Company, Apartment</label>
                  <input type="mobile" id='address-house' value={addressForm.house} onChange={e => setAddressForm({ ...addressForm, house: e.target.value })} />
                </div>
                <div className="new__address__form_col">
                  <label htmlFor="address-street">Area, Street, Sector, Village</label>
                  <input type="mobile" id='address-street' value={addressForm.street} onChange={e => setAddressForm({ ...addressForm, street: e.target.value })} />
                </div>
                <div className="new__address__form_col">
                  <label htmlFor="address-landmark">Landmark</label>
                  <input type="mobile" id='address-landmark' value={addressForm.landmark} onChange={e => setAddressForm({ ...addressForm, landmark: e.target.value })} />
                </div>
                <div className="new__address__form_col address-town-state">
                  <div>
                    <label htmlFor="address-town">Town/City</label>
                    <input type="mobile" id='address-town' value={addressForm.town} onChange={e => setAddressForm({ ...addressForm, town: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="address-state">State</label>
                    <select id="address-state" value={addressForm.state} onChange={e => setAddressForm({ ...addressForm, state: e.target.value })}>
                      {states.map((e, i) => (<option key={i} value={e}>{e}</option>))}
                    </select>
                  </div>
                </div>
                <div className="new__address__form_col address-default-col">
                  <input type="checkbox" id="address-default" checked={addressForm.default} onChange={e => setAddressForm({ ...addressForm, default: !addressForm.default })} />
                  <label htmlFor="address-default">Make this my default address</label>
                </div>
                <div className="new__address__delivery__indtruction">
                  <h3>Add delivery instructions</h3>
                  <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
                  <div className="new__address__form_col">
                    <label htmlFor="address-country">Address type</label>
                    <select id="address-type" value={addressForm.addressType} onChange={e => setAddressForm({ ...addressForm, addressType: e.target.value })}>
                      <option value="Select an Address Type">Select an Address Type</option>
                      <option value="Home (7 am – 9 pm delivery)">Home (7 am – 9 pm delivery)</option>
                      <option value="Office/Commercial (10 AM - 6 PM delivery)">Office/Commercial (10 AM - 6 PM delivery)</option>
                    </select>
                  </div>
                </div>
                <button type='submit' className='amazon-btn w-fit'>Use this address</button>
              </form>
            </div>
          </div>
        </div>
        <LoginFooter />
      </div>}
    {!loginUser.logedIn &&
      <LoginFirst />
    }
  </>)
}

export default Address
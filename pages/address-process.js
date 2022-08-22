import React, { useContext } from 'react'
import { StateContext } from '../lib/StateProvider'
import Link from 'next/link';
import { countries, states } from '../lib/countries';

const Address = () => {
  const [state, dispatch] = useContext(StateContext);
  return (
    <div className="address__box">
      <div className="address">
        <div className="address__ckeckout">
          <Link href="/checkout"><a><h2>
            <span>Checkout </span>
            <span style={{ color: '#ff956b' }}>({state?.cart?.length} items)</span>
          </h2></a></Link>
        </div>
        <div className="address__container">
          <div className="address__heading__wrapper">
            <h3 className='address__heading'>Select a delivery address</h3>
            <span className='address__instruction'>Is the address you&apos;d like to use displayed below? If so, click the corresponding &quot;Deliver to this address&quot; button. Or you can <a className='hyperlink' href="#new-address">enter a new delivery address.</a></span>
          </div>
          <div className="address__already__row">
            <div className="address__already__col">
              <div>
                <span className='address__already__name'>Krishna Prajapati</span>
                <span>Alternate Mo. No. 4598752156</span>
                <span>Hallapur, Shantinagar</span>
                <span>Ballia, UTTAR PRADESH 145875</span>
                <span>India</span>
                <button>Deliver to this address</button>
                <div className="address__already__update">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>

            <div className="address__already__col">
              <div>
                <span className='address__already__name'>Krishna Prajapati</span>
                <span>Alternate Mo. No. 4598752156</span>
                <span>Hallapur, Shantinagar</span>
                <span>Ballia, UTTAR PRADESH 145875</span>
                <span>India</span>
                <button>Deliver to this address</button>
                <div className="address__already__update">
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="new__address__container">
          <div className="new__address__footer__border"></div>
          <h3 className="new__address__heading">Add a new address</h3>
          <div className="new__address__autofill">
            <span>Save time. Autofill dummy address</span>
            <button>Autofill</button>
          </div>

          <form className='new__address__form'>
            <div className="new__address__form_col">
              <label htmlFor="address-country">Country/Region</label>
              <select id="address-country">
                {countries.map((e, i) => (<option key={i} value={e}>{e}</option>))}
              </select>
            </div>
            <div className="new__address__form_col">
              <label htmlFor="address-name">Full name</label>
              <input type="name" id='address-name' />
            </div>
            <div className="new__address__form_col">
              <label htmlFor="address-phone">Mobile number</label>
              <input type="mobile" id='address-phone' />
            </div>
            <div className="new__address__form_col">
              <label htmlFor="address-pincode">Pin code</label>
              <input type="mobile" id='address-pincode' />
            </div>
            <div className="new__address__form_col">
              <label htmlFor="address-house">Flat, House no., Building, Company, Apartment</label>
              <input type="mobile" id='address-house' />
            </div>
            <div className="new__address__form_col">
              <label htmlFor="address-street">Area, Street, Sector, Village</label>
              <input type="mobile" id='address-street' />
            </div>
            <div className="new__address__form_col">
              <label htmlFor="address-landmark">Landmark</label>
              <input type="mobile" id='address-landmark' />
            </div>
            <div className="new__address__form_col">
              <div>
                <label htmlFor="address-town">Town/City</label>
                <input type="mobile" id='address-town' />
              </div>
              <div>
                <label htmlFor="address-state">State</label>
                <select id="address-state">
                  {states.map((e, i) => (<option key={i} value={e}>{e}</option>))}
                </select>
              </div>
            </div>
            <div className="new__address__form_col">
              <input type="checkbox" id="address-default" />
              <label htmlFor="address-default">Make this my default address</label>
            </div>
            <div className="new__address__delivery__indtruction">
              <h4>Add delivery instructions</h4>
              <p>Preferences are used to plan your delivery. However, shipments can sometimes arrive early or later than planned.</p>
              <div className="new__address__form_col">
                <label htmlFor="address-country">Country/Region</label>
                <select id="address-country">
                  <option value="Select an Address Type">Select an Address Type</option>
                  <option value="Home (7 am – 9 pm delivery)">Home (7 am – 9 pm delivery)</option>
                  <option value="Office/Commercial (10 AM - 6 PM delivery)">Office/Commercial (10 AM - 6 PM delivery)</option>
                </select>
              </div>
            </div>
            <button type="button">Use this address</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Address
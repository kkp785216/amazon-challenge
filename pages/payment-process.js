import React, { useState } from 'react'
import { useRouter } from 'next/router'
import LoginFooter from '../Components/LoginFooter'
import ComponentCheckout from '../Components/ComponentCheckout'
import LoginFirst from '../Components/LoginFirst'
import { useSelector, useDispatch } from 'react-redux'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../lib/firebase'
import action from '../redux/action'

const Payment = () => {

  const router = useRouter();
  const { loginUser } = useSelector(state => state);
  const [method, setMethod] = useState(null);
  const dispatch = useDispatch();

  const [debitCardForm, setDebitCardForm] = useState({
    number: '123412341234',
    name: 'Krishna Prajapati',
    month: '07',
    year: '2024',
    default: false
  });

  const debitCardSelect = (e) => {
    let debitCard = document.getElementById('payment-card-details');
    let debitCardWrapper = document.querySelector('.payment__card__details__wrapper');
    if (e.target.checked) {
      document.getElementById('payment-debit-card-container').classList.add('active');
      debitCardWrapper.style.height = `${debitCard.offsetHeight}px`;
      setTimeout(() => {
        document.getElementById('payment-debit-card-container').className.includes('active') && (debitCardWrapper.style.height = 'auto');
      }, 500);
    }
    else {
      document.getElementById('payment-debit-card-container').classList.remove('active');
      debitCardWrapper.style.height = '0px';
    }
  }

  const debitCardDeselect = (e) => {
    let debitCard = document.getElementById('payment-card-details');
    let debitCardWrapper = document.querySelector('.payment__card__details__wrapper');
    if (e.target.checked) {
      document.getElementById('payment-debit-card-container').classList.remove('active');
      debitCardWrapper.style.height = `${debitCard.offsetHeight}px`;
      setTimeout(() => {
        debitCardWrapper.style.height = '0px';
      }, 0);
    }
  }

  const handlePay = async (e) => {
    if (loginUser.logedIn) {
      try {
        const paymentRef = doc(db, "profile", loginUser.user._id);
        await setDoc(paymentRef, {
          payment: {
            method: method,
            card: method === 'card' ? debitCardForm : null,
            _id: paymentRef.id
          },
          user_id: loginUser.user._id
        }, { merge: true });

        dispatch(action({
          type: 'PAYMENT_METHOD',
          payment: {
            method: method,
            card: method === 'card' ? debitCardForm : null,
          }
        }));
        router.push('place-order-process');
      } catch (error) {
        console.log('Payment method adding faild:', error);
      }
    }
  }

  return (<>
    {loginUser.logedIn &&
      <div className="payment__box">
        <div className="payment">
          <ComponentCheckout />
          <div className="payment__container">
            <h3 className='payment__heading'>Select a payment method</h3>
            <section className="payment__method__section">
              <div className="payment__method__section__left">
                <h3>Another payment method</h3>
                <div className='payment__card__container' id='payment-debit-card-container'>
                  <div className="payment__debit__card payment__card">
                    <input name="paymentoption" onChange={debitCardSelect} method="card" onClick={e => setMethod(e.target.getAttribute('method'))} type="radio" id="payment-debit" />
                    <label htmlFor="payment-debit">
                      <h4>Add Debit/Credit/ATM Card</h4>
                      <span className="payment__guidelines">
                        This is not actual amazon so plz don&apos;t fill your real card info. <pre> </pre> <span className='hyperlink'> Learn More</span>
                      </span>
                      <div className="payment__debit__cardImg">
                        <span style={{ backgroundPosition: '0px' }} id="payment-debit-img1"></span>
                        <span style={{ backgroundPosition: '-45px' }} id="payment-debit-img2"></span>
                        <span style={{ backgroundPosition: '-90px' }} id="payment-debit-img3"></span>
                        <span style={{ backgroundPosition: '-135px' }} id="payment-debit-img4"></span>
                        <span style={{ backgroundPosition: '-315px' }} id="payment-debit-img5"></span>
                        <span style={{ backgroundPosition: '-585px' }} id="payment-debit-img6"></span>
                        <span style={{ backgroundPosition: '-810px' }} id="payment-debit-img7"></span>
                      </div>
                    </label>
                  </div>
                  <div className="payment__card__details__wrapper">
                    <form className="payment__card__details" id='payment-card-details'>
                      <div className="payment__card__details__col">
                        <label htmlFor="payment-card-number">Card number</label>
                        <input type="number" id="payment-card-number" value={debitCardForm.number} onChange={e => setDebitCardForm({ ...debitCardForm, number: e.target.value })} />
                      </div>
                      <div className="payment__card__details__col">
                        <label htmlFor="payment-card-name">Name on card</label>
                        <input type="name" id="payment-card-name" value={debitCardForm.name} onChange={e => setDebitCardForm({ ...debitCardForm, name: e.target.value })} />
                      </div>
                      <div className="payment__card__details__col">
                        <label htmlFor="payment-card-date">Expiry date</label>
                        <div className="payment-card-date-col">
                          <select value={debitCardForm.month} onChange={e => setDebitCardForm({ ...debitCardForm, month: e.target.value })}>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                          </select>
                          <select value={debitCardForm.year} onChange={e => setDebitCardForm({ ...debitCardForm, year: e.target.value })}>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                            <option value="2034">2034</option>
                            <option value="2035">2035</option>
                            <option value="2036">2036</option>
                            <option value="2037">2037</option>
                            <option value="2038">2038</option>
                            <option value="2039">2039</option>
                            <option value="2040">2040</option>
                            <option value="2041">2041</option>
                            <option value="2042">2042</option>
                          </select>
                        </div>
                      </div>
                      <div className="payment__card__details__col">
                        <label></label>
                        <div>
                          <input type="checkbox" id="payment-card-default" checked={debitCardForm.default} onChange={e => setDebitCardForm({ ...debitCardForm, default: e.target.checked })} />
                          <label htmlFor='payment-card-default'>Use as my default payment</label>
                        </div>
                      </div>
                      <button type="submit" className='amazon-btn w-fit'>Add your card</button>
                    </form>
                  </div>
                </div>
                <div className='payment__card__container'>
                  <div className="payment__debit__card payment__card">
                    <input name="paymentoption" onChange={debitCardDeselect} type="radio" method="cash" onClick={e => setMethod(e.target.getAttribute('method'))} id="payment-paydelivery" />
                    <label htmlFor="payment-paydelivery">
                      <h4>Pay on Delivery</h4>
                      <span className='payment__guidelines'>Due to high demand and to ensure social distancing, Pay on Delivery is not available.</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="payment__method__section__right">
                <button onClick={handlePay} className='amazon-btn'>Continue</button>
                <p>You can review this order before it&apos;s final.</p>
              </div>
            </section>
          </div>
        </div>
        <LoginFooter />
      </div>}
    {!loginUser.logedIn &&
      <LoginFirst />
    }
  </>)
}

export default Payment
import React from 'react'
import Link from 'next/link'
import ComponentCheckout from '../Components/ComponentCheckout'
import RedeemIcon from '@mui/icons-material/Redeem';
import { useRouter } from 'next/router'
import action from '../redux/action';
import LoginFirst from '../Components/LoginFirst';
import {useSelector, useDispatch} from 'react-redux'

const PlaceOrder = () => {

    const {cart, loginUser} = useSelector(state => state);
    const dispatch = useDispatch();
    const router = useRouter();

    const removeFromCart = (sno) => {
        dispatch(action({
            type: 'REMOVE_FROM_CART',
            sno: parseInt(sno)
        }));
    }

    return (<>
        {loginUser.logedIn &&
            <div className='placeorder'>
                <div className="placeorder__container">
                    <ComponentCheckout />
                    <div className="placeorder__review__heading">
                        <h1>Review your order</h1>
                        <span>By placing your order, you agree to Amazon&apos;s <span className='hyperlink'>privacy notice</span> and <span className='hyperlink'>conditions of use.</span></span>
                    </div>
                    <div className="placeorder__row">
                        <div className="placeorder__left">
                            <div className="placeorder__method__card">
                                <div className="placeorder__method__address">
                                    <div className="placeorder__method__heading">
                                        <h5>Shipping address</h5>
                                        <Link href='/address-process'><a className='hyperlink'>Change</a></Link>
                                    </div>
                                    <div className='placeorder__method__address__details'>
                                        <span>Krishna Prajapati</span>
                                        <span>Alternate Mo. No. 4598752156</span>
                                        <span>Hallapur, Shantinagar</span>
                                        <span>Ballia, UTTAR PRADESH 145875</span>
                                        <span>India</span>
                                        <span>Phone: 6565656565</span>
                                    </div>
                                </div>
                                <div className="placeorder__method__payment">
                                    <div className="placeorder__method__heading">
                                        <h5>Payment method</h5>
                                        <Link href='/payment-process'><a className='hyperlink'>Change</a></Link>
                                    </div>
                                    <span>Pay on delivery</span>
                                </div>
                                <div className="placeorder__method__gift">
                                    <div className="placeorder__method__heading">
                                        <h5>Gift cards, Voucher &amp; Promotional codes</h5>
                                    </div>
                                    <div className="placeorder__method__gift__row">
                                        <input type="text" placeholder='Enter code' />
                                        <button type='button'>Apply</button>
                                    </div>
                                </div>
                            </div>
                            <div className="placeorder__review__card">
                                <div className="placeorder__prime">
                                    <img src="/assets/amazon-prime.png" alt="Amazon Prime" />
                                    <div className="placeorder__prime__details">
                                        <p>
                                            <span style={{ color: '#e47911' }}>Krishna, get FREE delivery on this order.</span>
                                            <span style={{ color: '#009900' }}>With an Amazon Prime membership, you can save on delivery charges, enjoy exclusive deals, watch movies and more.</span>
                                        </p>
                                        <div className='placeorder__prime__details__join'>
                                            »&nbsp;
                                            <span className='hyperlink'>Join Prime for just ₹459 for 3 months</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="placeorder__review__wrapper">
                                    <div className="placeorder__delivery__date__wrapper">
                                        <span className="placeorder__delivery__date__fulfill">
                                            <span>Items shipped from Amazon</span>
                                            <img src="/assets/fulfilled.png" width='66' alt="Fulfilled" />
                                        </span>
                                        <span className="placeorder__delivery__date__date">Delivery date: 31 Aug 2022</span>
                                        <span className="placeorder__delivery__date__time">If you order in the next 22 hours and 17 minutes (<span className='hyperlink'>Details</span>)</span>
                                    </div>
                                    <div className="placeorder__reviews__row">
                                        <div className="placeorder__reviews__col">
                                            {cart?.map((e, i) => (
                                                <div className="placeorder__reviews__product" key={i}>
                                                    <img className='placeorder__reviews__productImg' src={e.imgUrl} alt="" />
                                                    <div className="placeorder__reviews__product__details">
                                                        <strong className='placeorder__reviews__product__name'>{e.name}</strong>
                                                        <div className="placeorder__reviews__product__price">
                                                            <span className="placeorder__reviews__product__priceFake">₹{e.fakePrice}</span>
                                                            <span className="placeorder__reviews__product__price">₹{e.price}</span>
                                                            <img src="/assets/fulfilled.png" width='66' alt="" />
                                                        </div>
                                                        <span className="placeorder__reviews__product__save">You Save: ₹{e.fakePrice - e.price} ({parseInt((e.price / (e.fakePrice - e.price)) * 100)}%)</span>
                                                        <span className="placeorder__reviews__product__quantity">Quantity: 1<span onClick={() => removeFromCart(e.sno)} className='hyperlink'>Delete</span></span>
                                                        <span className='placeorder__reviews__product__soldBy'>Sold by: FIRST MART</span>
                                                        <button className="placeorder__reviews__product__giftBtn">
                                                            <RedeemIcon />
                                                            Add gift options
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="placeorder__reviews__col">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="placeorder__right">
                            <div className="placeorder__summary__card">
                                <button className="amazon-btn" onClick={() => router.push('/amazon-thanks')}>Place Your Order and pay</button>
                                <strong className='placeorder__summary__heading'>Order Sammary</strong>
                                <div className="placeorder__summary__list">
                                    <div className="placeorder__summary__list__row">
                                        <span>Items:</span>
                                        <span>₹{cart?.map(e => parseInt(e.price))?.reduce((accu, curr) => (accu + curr), 0)?.toFixed(2)}</span>
                                    </div>
                                    <div className="placeorder__summary__list__row">
                                        <span>Delivery:</span>
                                        <span>₹00</span>
                                    </div>
                                    <div className="placeorder__summary__list__row">
                                        <span>Total:</span>
                                        <span>₹{cart?.map(e => parseInt(e.price))?.reduce((accu, curr) => (accu + curr), 0)?.toFixed(2)}</span>
                                    </div>
                                    <div className="placeorder__summary__list__row">
                                        <span>Promotion Applied:</span>
                                        <span>₹00</span>
                                    </div>
                                </div>
                                <div className="placeorder__summary__orderTotal">
                                    <span>Order Total:</span>
                                    <span>₹{cart?.map(e => parseInt(e.price))?.reduce((accu, curr) => (accu + curr), 0)?.toFixed(2)}</span>
                                </div>
                                <span className="placeorder__summary__saving">Your Savings: ₹ {(cart?.map(e => parseInt(e.fakePrice))?.reduce((accu, curr) => (accu + curr), 0) - cart?.map(e => parseInt(e.price))?.reduce((accu, curr) => (accu + curr), 0)).toFixed(2)} ({parseInt((cart?.map(e => parseInt(e.price))?.reduce((accu, curr) => (accu + curr), 0) / (cart?.map(e => parseInt(e.fakePrice))?.reduce((accu, curr) => (accu + curr), 0) - cart?.map(e => parseInt(e.price))?.reduce((accu, curr) => (accu + curr), 0))) * 100)}%)</span>
                                <ul className="placeorder__summary__savingList">
                                    <li>FREE Delivery</li>
                                    <li>Item discount</li>
                                </ul>
                                <div className="placeorder__summary__instruction">
                                    <span className='hyperlink'>How are delivery costs calculated?</span>
                                    <span className='hyperlink'>Why didn&apos;t I qualify for FREE Delivery?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        {!loginUser.logedIn &&
            <LoginFirst />
        }
    </>)
}

export default PlaceOrder
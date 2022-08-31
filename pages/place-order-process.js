import React, { useEffect } from 'react'
import Link from 'next/link'
import ComponentCheckout from '../Components/ComponentCheckout'
import RedeemIcon from '@mui/icons-material/Redeem';
import { useRouter } from 'next/router'
import action from '../redux/action';
import LoginFirst from '../Components/LoginFirst';
import { useSelector, useDispatch } from 'react-redux'
import { getDoc, doc, deleteDoc, setDoc, collection } from 'firebase/firestore'
import { db } from '../lib/firebase';

const PlaceOrder = () => {

    const { cart, loginUser, address, payment } = useSelector(state => state);
    const dispatch = useDispatch();
    const router = useRouter();

    const removeFromCart = (sno, _id) => {
        dispatch(action({
            type: 'REMOVE_FROM_CART',
            sno: parseInt(sno),
            _id: _id
        }));
    }

    const paymentMethod = {
        cash: 'Cash on Delivery',
        card: 'Payment by card'
    }

    useEffect(() => {
        (async () => {
            if (loginUser.logedIn && address === null) {
                const q1Shapshot = await getDoc(doc(db, "profile", loginUser.user._id));
                if (q1Shapshot.exists()) {
                    dispatch(action({
                        type: 'ADDRESS',
                        address: q1Shapshot.data().address
                    }));
                } else {
                    console.log("No such document!");
                }
            }
            if (loginUser.logedIn && payment.method === null) {
                const q1Shapshot = await getDoc(doc(db, "profile", loginUser.user._id));
                if (q1Shapshot.exists()) {
                    dispatch(action({
                        type: 'PAYMENT_METHOD',
                        payment: q1Shapshot.data().payment
                    }));
                } else {
                    console.log("No such document!");
                }
            }
        })();
    }, [loginUser.logedIn]);

    const handlePlaceOrder = async () => {
        if (loginUser.logedIn) {
            try {
                cart.map(async (e) => {
                    await deleteDoc(doc(db, "cart", e._id));
                });
                const _idArr = [];
                cart.map(async (e) => {
                    // Save orders to firestore
                    const orderRef = doc(collection(db, "order"));
                    _idArr.push(orderRef.id);
                    await setDoc(orderRef, {
                        ...e,
                        _id: orderRef.id,
                        user_id: loginUser.user._id,
                        cart_id: e._id,
                        delivery_date: new Date().getTime()
                    });
                    // save order to local redux store
                });
                dispatch(action({
                    type: 'ADD_ORDER',
                    order: cart.map((e, i) => {
                        return {
                            sno: parseInt(e.sno),
                            _id: _idArr[i],
                            cart_id: e._id
                        }
                    })
                }));
                // After order remove ordered items from the cart
                cart.map((e) => {
                    dispatch(action({
                        type: 'REMOVE_FROM_CART',
                        sno: parseInt(e.sno),
                        _id: e._id
                    }));
                });
                router.push('/amazon-thanks');
            } catch (error) {
                console.log('Buying items from cart faild:', error);
            }
        }
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
                                    {address ?
                                        <div className='placeorder__method__address__details'>
                                            <span>{address.name}</span>
                                            <span>{address.street}</span>
                                            <span>{address.town}, {address.state} - {address.pincode}</span>
                                            <span>{address.country}</span>
                                            <span>Phone: {address.phone}</span>
                                        </div> :
                                        <div className='placeorder__method__address__details'>
                                            <span>Please add address</span>
                                        </div>
                                    }
                                </div>
                                <div className="placeorder__method__payment">
                                    <div className="placeorder__method__heading">
                                        <h5>Payment method</h5>
                                        <Link href='/payment-process'><a className='hyperlink'>Change</a></Link>
                                    </div>
                                    {payment.method ?
                                        <span>{paymentMethod[payment.method]}</span> :
                                        <span>Please select payment method</span>}
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
                                                        <span className="placeorder__reviews__product__quantity">Quantity: 1<span onClick={() => removeFromCart(e.sno, e._id)} className='hyperlink'>Delete</span></span>
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
                                <button className="amazon-btn" onClick={handlePlaceOrder}>Place Your Order and pay</button>
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
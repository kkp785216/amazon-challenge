import React from 'react'
import Link from 'next/link'
import ComponentCheckout from '../Components/ComponentCheckout'
import RedeemIcon from '@mui/icons-material/Redeem';

const ReviewOrder = () => {
    return (
        <div></div>
    )
}

const PlaceOrder = () => {
    return (
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
                                        <div className="placeorder__reviews__product">
                                            <img className='placeorder__reviews__productImg' src="/assets/mobile.jpg" alt="" />
                                            <div className="placeorder__reviews__product__details">
                                                <strong className='placeorder__reviews__product__name'>WOW IMAGINE Polycarbonate Translucent Hybrid Smoked Matte 360 Degree Protection Protective Hard Case Bumper Back Cover for Oppo A54 4G (Blue)</strong>
                                                <div className="placeorder__reviews__product__price">
                                                    <span className="placeorder__reviews__product__priceFake">₹999.00</span>
                                                    <span className="placeorder__reviews__product__price">₹161.00</span>
                                                    <img src="/assets/fulfilled.png" width='66' alt="" />
                                                </div>
                                                <span className="placeorder__reviews__product__save">You Save: ₹584.00 (73%)</span>
                                                <span className="placeorder__reviews__product__quantity">Quantity: 1<span className='hyperlink'>Delete</span></span>
                                                <span className='placeorder__reviews__product__soldBy'>Sold by: FIRST MART</span>
                                                <button className="placeorder__reviews__product__giftBtn">
                                                    <RedeemIcon />
                                                    Add gift options
                                                </button>
                                            </div>
                                        </div>
                                        <div className="placeorder__reviews__product">
                                            <img className='placeorder__reviews__productImg' src="/assets/mobile.jpg" alt="" />
                                            <div className="placeorder__reviews__product__details">
                                                <strong className='placeorder__reviews__product__name'>WOW IMAGINE Polycarbonate Translucent Hybrid Smoked Matte 360 Degree Protection Protective Hard Case Bumper Back Cover for Oppo A54 4G (Blue)</strong>
                                                <div className="placeorder__reviews__product__price">
                                                    <span className="placeorder__reviews__product__priceFake">₹999.00</span>
                                                    <span className="placeorder__reviews__product__price">₹161.00</span>
                                                    <img src="/assets/fulfilled.png" width='66' alt="" />
                                                </div>
                                                <span className="placeorder__reviews__product__save">You Save: ₹584.00 (73%)</span>
                                                <span className="placeorder__reviews__product__quantity">Quantity: 1<span className='hyperlink'>Delete</span></span>
                                                <span className='placeorder__reviews__product__soldBy'>Sold by: FIRST MART</span>
                                                <button className="placeorder__reviews__product__giftBtn">
                                                    <RedeemIcon />
                                                    Add gift options
                                                </button>
                                            </div>
                                        </div>
                                        <div className="placeorder__reviews__product">
                                            <img className='placeorder__reviews__productImg' src="/assets/mobile.jpg" alt="" />
                                            <div className="placeorder__reviews__product__details">
                                                <strong className='placeorder__reviews__product__name'>WOW IMAGINE Polycarbonate Translucent Hybrid Smoked Matte 360 Degree Protection Protective Hard Case Bumper Back Cover for Oppo A54 4G (Blue)</strong>
                                                <div className="placeorder__reviews__product__price">
                                                    <span className="placeorder__reviews__product__priceFake">₹999.00</span>
                                                    <span className="placeorder__reviews__product__price">₹161.00</span>
                                                    <img src="/assets/fulfilled.png" width='66' alt="" />
                                                </div>
                                                <span className="placeorder__reviews__product__save">You Save: ₹584.00 (73%)</span>
                                                <span className="placeorder__reviews__product__quantity">Quantity: 1<span className='hyperlink'>Delete</span></span>
                                                <span className='placeorder__reviews__product__soldBy'>Sold by: FIRST MART</span>
                                                <button className="placeorder__reviews__product__giftBtn">
                                                    <RedeemIcon />
                                                    Add gift options
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="placeorder__reviews__col">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="placeorder__right"></div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
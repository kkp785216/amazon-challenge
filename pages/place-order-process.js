import React from 'react'
import Link from 'next/link'
import ComponentCheckout from '../Components/ComponentCheckout'

const PlaceOrder = () => {
    return (
        <div className='placeorder'>
            <div className="placeorder__container">
                <ComponentCheckout />
                <div className="placeorder__review__heading">
                    <h1>Review your order</h1>
                    <span>By placing your order, you agree to Amazon&apos;s <span className='hyperlink'>privacy notice</span> and <span className='hyperlink'>conditions of use.</span></span>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
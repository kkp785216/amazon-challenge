import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';

const ComponentCheckout = () => {
    const {cart} = useSelector(state => state);
    return (
        <div className="component__ckeckout">
            <Link href="/checkout"><a><h2>
                <span>Checkout </span>
                <span style={{ color: '#ff956b' }}>({cart?.length} items)</span>
            </h2></a></Link>
        </div>
    )
}

export default ComponentCheckout
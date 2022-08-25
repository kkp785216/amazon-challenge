import React, {useContext} from 'react'
import { StateContext } from '../lib/StateProvider'
import Link from 'next/link'

const ComponentCheckout = () => {
    const [state] = useContext(StateContext);
    return (
        <div className="component__ckeckout">
            <Link href="/checkout"><a><h2>
                <span>Checkout </span>
                <span style={{ color: '#ff956b' }}>({state?.cart?.length} items)</span>
            </h2></a></Link>
        </div>
    )
}

export default ComponentCheckout
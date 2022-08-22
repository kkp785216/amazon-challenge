import React, { useContext } from 'react'
import { StateContext } from '../lib/StateProvider'
import Link from 'next/link';

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
        <div id='new-address' className="address__container">
          <h3 className='address__heading'>Select a delivery address</h3>
          <span className='address__instruction'>Is the address you&apos;d like to use displayed below? If so, click the corresponding &quot;Deliver to this address&quot; button. Or you can <a className='hyperlink' href="#new-address">enter a new delivery address.</a></span>
          <div className="address__already__row">

            <div className="address__already__col">
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

            <div className="address__already__col">
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
    </div>
  )
}

export default Address
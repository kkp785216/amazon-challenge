import React, { useContext } from 'react'
import { StateContext } from '../lib/StateProvider'

const payment = () => {
  const [state, dispatch] = useContext(StateContext);
  return (
    <div className="address">
      <div className="address__ckeckout">
        <h2>
          <span>Checkout </span>
          <span>({state?.cart?.length} items)</span>
        </h2>
      </div>
      <div className="address__container">
        <h3>Select a delivery address</h3>
        <span>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button. Or you can enter a new delivery address.</span>
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
        </div>
      </div>
    </div>
  )
}

export default payment
import React, { useContext } from 'react'
import Head from 'next/head'
import CheckoutProduct from '../Components/Products/CheckoutProduct'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { StateContext } from '../lib/StateProvider';

const Checkout = () => {
  const [state, dispatch] = useContext(StateContext);
  return (
    <>
      <Head>
        <title>Amazon Challenge - Checkout</title>
        <meta name="description" content="Amazon Shoping App" />
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="checkout">
        <div className="checkout__left">
          <h1>Shoppig Cart</h1>
          <div className="checkout__table__header">
            <small>Items</small>
            <small>Price</small>
          </div>
          <div className="checkout__products">
            {state.cart.length >= 1 ? state.cart.map((e, i) => (
              <CheckoutProduct
                key={e.sno}
                imgUrl={e.imgUrl}
                name={e.name}
                description={e.description}
                price={e.price}
                sno={e.sno}
              />
            )) :
              <div className='checkout__empty__cart'>
                <span>Cart is Empty and Purchase Something.</span>
              </div>
            }
          </div>
        </div>
        <div className="checkout__right">
          {state.cart.reduce((a, b) => a + parseInt(b.price), 0) >= 5000 && <div className="checkout__alert">
            <CheckCircleRoundedIcon />
            <span>Your order is eligible for FREE Delivery. Select this option at checkout. Details</span>
          </div>}
          <div className="checkout__subtotal">
            <span className='subtotal__items'>Subtotal ({state.cart.length} items):</span>
            <span className='subtotal__price'>{state.cart.reduce((a, b) => a + parseInt(b.price), 0)}/-</span>
          </div>
          <button className="subtotal__buyBtn">Proceed to Buy</button>
        </div>
      </div>
    </>
  )
}

export default Checkout
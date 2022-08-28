import React from 'react'
import Head from 'next/head'
import CheckoutProduct from '../Components/Products/CheckoutProduct'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Link from 'next/link'
// import FlipMove from 'react-flip-move';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

const Checkout = () => {
  const { cart } = useSelector(state => state);
  const router = useRouter();
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
            {cart.length >= 1 ?
              <div
                duration={750}
                easing="ease-out"
              >
                {cart.map((e, i) => (
                  <CheckoutProduct
                    key={e.sno}
                    imgUrl={e.imgUrl}
                    name={e.name}
                    description={e.description}
                    price={e.price}
                    sno={e.sno}
                  />
                ))}
              </div>
              :
              <div className='checkout__empty__cart'>
                <img className='checkout__empty__cartImg' src="/assets/empty_cart.png" alt="" />
                <span className="checkout__empty__cartHeading">Opps! Cart is empty</span>
                <p className='checkout__empty__cartPara'>Cart is Empty <Link href='/'><a className='hyperlink'>Go to Home</a></Link> and Purchase Something.</p>
              </div>
            }
          </div>
        </div>
        <div className="checkout__right">
          {cart.reduce((a, b) => a + parseInt(b.price), 0) >= 5000 && <div className="checkout__alert">
            <CheckCircleRoundedIcon />
            <span>Your order is eligible for FREE Delivery. Select this option at checkout. Details</span>
          </div>}
          <div className="checkout__subtotal">
            <span className='subtotal__items'>Subtotal ({cart.length} items):</span>
            <span className='subtotal__price'>{cart.reduce((a, b) => a + parseInt(b.price), 0)}/-</span>
          </div>
          <button onClick={() => { router.push('/address-process') }} className="subtotal__buyBtn">Proceed to Buy</button>
        </div>
      </div>
    </>
  )
}

export default Checkout
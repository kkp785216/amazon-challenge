import React from 'react'

const CheckoutProduct = (props) => {
  const { name, imgUrl, price } = props;
  return (
    <div className='checkout__products__row'>
      <div className='checkout__products__left'>
        <img src={imgUrl.src ? imgUrl.src : imgUrl} alt={name} />
      </div>
      <div className='checkout__products__right'>
        <div className='checkout__products__content'>
          <div>
            <span className='checkout__products__name'>{name}</span>
          </div>
          <span className='home__products__remCartBtn'>Remove from Cart</span>
        </div>
        <span className='checkout__products__price'>
          <small>₹</small>
          {price}/-
        </span>
      </div>
    </div>
  )
}

export default CheckoutProduct
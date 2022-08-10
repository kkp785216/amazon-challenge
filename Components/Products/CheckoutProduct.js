import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const CheckoutProduct = (props) => {
  const { name, imgUrl, price, description, rating = 3 } = props;
  return (
    <div className='checkout__products__row'>
      <div className='checkout__products__left'>
        <img src={imgUrl} alt={name} />
      </div>
      <div className='checkout__products__right'>
        <div className='checkout__products__content'>
          <div>
            <span className='checkout__products__name'>{name}</span>
            <span className="checkout__products__rating">
              {[...new Array(5)].map((e, i) => (
                rating > i ? <StarIcon key={i}/> : <StarBorderIcon />
              ))}
            </span>
            <p className="checkout__products__description">{description}</p>
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
import React, { useContext } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { StateContext } from '../../lib/StateProvider';
import action from '../../lib/action';

const CheckoutProduct = (props) => {
  const { name, imgUrl, price, description, rating = 3, sno } = props;
  const [state, dispatch] = useContext(StateContext);
  const removeFromCart = () => {
    action(dispatch, {
      type: 'REMOVE_FROM_CART',
      sno: parseInt(sno)
    });
  }
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
                rating > i ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
              ))}
            </span>
            <p className="checkout__products__description">{description}</p>
          </div>
          <span className='home__products__remCartBtn' onClick={removeFromCart}>Remove from Cart</span>
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
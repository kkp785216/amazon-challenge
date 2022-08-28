import React from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoginFirst from '../Components/LoginFirst';
import { useSelector } from 'react-redux';

const AmazonThanks = () => {

  const { loginUser } = useSelector(state => state);

  return (<>
    {loginUser.logedIn &&
      <div className='thanks'>
        <div className="thanks__container">
          <div className="thanks__order__container">
            <div className="thanks__order__card">
              <h2 className='thanks__order__heading'><CheckCircleRoundedIcon />Order placed, thank you!</h2>
              <p className='thanks__order__message'>Confirmation will be sent to <span style={{ color: '#007185' }} className='hyperlink'>Message Centre.</span></p>
              <p className="thanks__order__address">
                <strong>Shipping to Krishna Prajapati, </strong>
                <span> Unknown, Buxar Golamber, BUXAR, BIHAR, 802101</span>
              </p>
              <div className='thanks__order__hr'></div>
              <div className="thanks__order__products">
                <div className="thanks__order__products__row">
                  <div className="thanks__order__products__date">
                    <strong>Sunday, 28 Aug</strong>
                    <p>Delivery date</p>
                  </div>
                  <div className="thanks__order__products__item">
                    <img src="/assets/mobile.jpg" alt="" />
                  </div>
                </div>
              </div>
              <Link href='/your-orders'><a className='thanks__order__gotoOrder hyperlink'>Go to your orders<ChevronRightIcon /></a></Link>
            </div>
          </div>
        </div>
      </div>}
    {!loginUser.logedIn &&
      <LoginFirst />
    }
  </>)
}

export default AmazonThanks
import React, { useState, useEffect } from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoginFirst from '../Components/LoginFirst';
import { useSelector } from 'react-redux';
import { db } from '../lib/firebase';
import { getDocs, where, query, collection, documentId } from 'firebase/firestore';

const AmazonThanks = () => {

  const { loginUser, order } = useSelector(state => state);
  const [recentOrder, setRecentOrder] = useState([]);

  useEffect(() => {
    if (loginUser.logedIn && order.length >= 1) {
      (async () => {
        const q1 = query(collection(db, "order"), where(documentId(), "in", order.map(e => e._id)));
        console.log(order.map(e => e._id))
        const q1Shapshot = await getDocs(q1);
        const q1Data = q1Shapshot.docs.map(a => a.data());
        console.log(q1Data);
        setRecentOrder(q1Data)
      })();
    }
  }, [loginUser.logedIn]);

  const formatDate = (input) => {
    const date = new Date(input);
    return `${["Sunday", "Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saterday"][date.getDay()]}, ${date.getDate() <= 9 ? '0'+date.getDate() : date.getDate()} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()]}`
  }

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
                {recentOrder.length >= 1 ? recentOrder.map((e, i) => (
                  <div key={i} className="thanks__order__products__row">
                    <div className="thanks__order__products__date">
                      <strong>{formatDate(e.delivery_date)}</strong>
                      <p>Delivery date</p>
                    </div>
                    <div className="thanks__order__products__item">
                      <img src={e.imgUrl} alt="" />
                    </div>
                  </div>
                )) :
                  <div>
                    There is no order performed
                  </div>
                }
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
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux';

const HomeProductsLayout = (props) => {
    const { heading, name, imgUrl, fakePrice, price, id, rating = 3 } = props
    const {cart} = useSelector(state => state);
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: { name, imgUrl, fakePrice, price, id, rating, sno: cart.length }
        });
    }
    return (
        <div className="home__products__col" key={id}>
            <div>
                <span className='home__products__heading'>{heading}</span>
                <del className='home__products__price__cross'>
                    <small>₹</small>
                    {fakePrice}
                </del>
                <span className='home__products__price'>
                    <small>₹</small>
                    {price}/-
                </span>
                <span className="home__products__rating">
                    {[...new Array(5)].map((e, i) => (
                        rating > i ? <StarIcon key={i} /> : <StarBorderIcon key={i} />
                    ))}
                </span>
            </div>
            <img className='home__products__img' src={imgUrl} alt={name} />
            <span className='home__products__name'>{name}</span>
            <span className='home__products__cartBtn' onClick={addToCart}>
                Add to Cart
                {cart.filter(a => id === a.id).length >= 1 &&
                    <span className='home__products__cartBtn__itemoverlay'>{cart.filter(a => id === a.id).length}</span>}
            </span>
        </div>
    )
}

const HomeProduct1 = () => {
    return (
        <div className="home__products">
            <div className="home__products__row">
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='OPPO F21 Pro (Sunset Orange, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/1.jpg"
                    fakePrice='22999'
                    price='12999'
                    id='1301'
                    rating='4'
                />
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)
                    Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)'
                    imgUrl="/assets/home-products1/2.jpg"
                    fakePrice='24999'
                    price='14999'
                    id='1302'
                    rating='4'
                />
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Samsung Galaxy Z Fold3 5G (Phantom Green, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/3.jpg"
                    fakePrice='22999'
                    price='12999'
                    id='1303'
                    rating='4'
                />
            </div>
            <div className="home__products__row">
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Samsung Galaxy Z Fold3 5G (Phantom Green, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/4.jpg"
                    fakePrice='22999'
                    price='12999'
                    id='1304'
                    rating='4'
                />
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Samsung Galaxy Z Fold3 5G (Phantom Green, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/5.jpg"
                    fakePrice='22999'
                    price='12999'
                    id='1305'
                    rating='4'
                />
            </div>
            <div className="home__products__row">
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Samsung Galaxy Z Fold3 5G (Phantom Green, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/5.jpg"
                    fakePrice='22999'
                    price='12999'
                    id='1306'
                    rating='4'
                />
            </div>
        </div>
    )
}

export default HomeProduct1
import React from 'react'

const HomeProductsLayout = (props) => {
    const { heading, name, imgUrl, fakePrice, price } = props
    return (
        <div className="home__products__col">
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
            </div>
            <img className='home__products__img' src={imgUrl} alt={name} />
            <span className='home__products__name'>{name}</span>
            <span className='home__products__cartBtn'>Add to Cart</span>
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
                />
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)
                    Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)'
                    imgUrl="/assets/home-products1/2.jpg"
                    fakePrice='24999'
                    price='14999'
                />
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Samsung Galaxy Z Fold3 5G (Phantom Green, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/3.jpg"
                    fakePrice='22999'
                    price='12999'
                />
            </div>
            <div className="home__products__row">
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Samsung Galaxy Z Fold3 5G (Phantom Green, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/4.jpg"
                    fakePrice='22999'
                    price='12999'
                />
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Samsung Galaxy Z Fold3 5G (Phantom Green, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/5.jpg"
                    fakePrice='22999'
                    price='12999'
                />
            </div>
            <div className="home__products__row">
                <HomeProductsLayout
                    heading='Up to 70% off | Clearance store'
                    name='Samsung Galaxy Z Fold3 5G (Phantom Green, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers'
                    imgUrl="/assets/home-products1/5.jpg"
                    fakePrice='22999'
                    price='12999'
                />
            </div>
        </div>
    )
}

export default HomeProduct1
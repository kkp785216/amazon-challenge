import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import SearchIcon from '@mui/icons-material/Search';

const YourOrders = () => {

    const breadcrumbList = [
        {
            title: 'Your Account',
            link: '/account',
            active: false
        },
        {
            title: 'Your Orders',
            link: '/your-orders',
            active: true
        },
    ]

    return (
        <div className='yourorders'>
            <div className='yourorders__container'>
                <div className="yourorders__breadcrumb">
                    <Breadcrumb breadcrumbList={breadcrumbList} />
                </div>
                <div className="yourorders__heading">
                    <h2>Your Orders</h2>
                    <div className="yourorders__search">
                        <div className='yourorders__search__wrapper'>
                            <SearchIcon />
                            <input type="search" placeholder='Search all orders'/>
                        </div>
                        <button>Search Orders</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourOrders
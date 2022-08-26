import React from 'react'
import Link from 'next/link'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// const breadcrumbList = [
//     {
//         title: 'Your Account',
//         link: '/account',
//         active: false
//     },
//     {
//         title: 'Your Orders',
//         link: '/your-orders',
//         active: true
//     },
// ]
const Breadcrumb = ({breadcrumbList}) => {
    return (
        <div className='breadcrumb'>
            <ul>
                {breadcrumbList?.map((e, i) => (
                    e.active ?
                        <li className='active' key={i}><span className='hyperlink2'>{e.title}</span></li> :
                        <li key={i}><Link href={e.link}><a className='hyperlink2'>{e.title}</a></Link><ChevronRightIcon /></li>
                ))}
            </ul>
        </div>
    )
}

export default Breadcrumb
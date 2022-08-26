import React, { useContext, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'
import { StateContext } from '../lib/StateProvider';

const Header = () => {

    const [state] = useContext(StateContext);

    return (
        <header className='header'>
            <Link href='/'><a><img src="/assets/logo.png" className='header__logo' alt="Logo" /></a></Link>
            <div className="header__search">
                <input type="text" className='header__seachInput' placeholder='Search' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <nav className="header__navbar">
                <Link href='/login'>
                    <a className="header__option">
                        <span className='header__optionLineOne'>Hello <span>{state.loginUser.logedIn ? state.loginUser.user.name : 'Guest'}</span></span>
                        <span className='header__optionLineTwo'>Accounts &#38; Lists</span>
                    </a>
                </Link>
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>&#38; Orders</span>
                </div>
                <Link href='/checkout'><a>
                    <div className="header__cart">
                        <div className="header__option">
                            <span className='header__optionLineOne header_cart_count'>{state.cart.length}</span>
                            <ShoppingCartIcon className='header__optionLineTwo header_cart_logo' />
                        </div>
                        <div className="header__option">
                            <span className='header__optionLineOne' style={{ visibility: 'hidden' }}>45</span>
                            <span className='header__optionLineTwo'>Cart</span>
                        </div>
                    </div>
                </a></Link>
            </nav>
        </header>
    )
}

export default Header
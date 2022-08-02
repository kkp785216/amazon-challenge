import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link'

const Header = () => {
    return (
        <header className='header'>
            <Link href='/'><a><img src="/assets/logo.png" className='header__logo' alt="Logo" /></a></Link>
            <div className="header__search">
                <input type="text" className='header__seachInput' placeholder='Search' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <nav className="header__navbar">
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Accounts &#38; Lists</span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>&#38; Orders</span>
                </div>
                <Link href='/checkout'><a>
                    <div className="header__cart">
                        <div className="header__option">
                            <span className='header__optionLineOne header_cart_count'>0</span>
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
import React from 'react'
// import './Header.scss'
import logo from '../../Assets/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo.src} className='header__logo' alt="" />
            <div className="header__search">
                <input type="text" className='header__seachInput' />
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
                <div className="header__cart">
                    <div className="header__option">
                        <span className='header__optionLineOne header_cart_count'>0</span>
                        <ShoppingCartIcon className='header__optionLineTwo header_cart_logo' />
                    </div>
                    <div className="header__option">
                        <span className='header__optionLineOne' style={{visibility:'hidden'}}>45</span>
                        <span className='header__optionLineTwo'>Cart</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
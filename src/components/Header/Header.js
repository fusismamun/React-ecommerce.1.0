import React from 'react';
import logo from '../../images/Background.png';
import shopIcon from '../../images/cart-imag.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <a className='shop-nav' href="/shop">Shop</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                    <img className='navlogo' src={shopIcon} alt="" />
            </nav>
        </div>
    );
};

export default Header;
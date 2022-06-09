import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating-stars-component';

const Product = (props) => {
    const {name, category, price, img, seller, stock , star} = props.product;
    const webIcon = <FontAwesomeIcon icon={faShoppingCart } />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className='product-name'>{name}</h2>
                <h5 className='product-price'>$ {price}</h5>
                <p><small>by: {seller}</small></p>
                <Rating initialRating = {star}></Rating>
                <h5>Category : {category}</h5>
                <p>Only {stock} left in stock- order soon</p>
                <button 
                onClick={() => props.handeleAdd(props.product)}
                className='button-cat'>{webIcon}add to cart </button>
                   
            </div>
            
        </div>
    );
};

export default Product;
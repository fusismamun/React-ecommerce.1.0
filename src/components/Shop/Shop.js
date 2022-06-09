import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const webIcon = <FontAwesomeIcon icon={faSearch } />
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displays, setDisplay] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplay(data);
        });
    },[]);

    useEffect(()=> {
        if (products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addProduct = products.find(product => product.key === key);
                if (addProduct){
                    const quantity = savedCart[key];
                    addProduct.quantity = quantity;
                    storedCart.push(addProduct);
                }
                
            }
            setCart(storedCart);
        }
    },[products]);
    const handeleAdd = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);
    }
    const handelSearch = event => {
       const searchtext = (event.target.value);
       const mathProduct = products.filter(product => product.name.toLowerCase().includes(searchtext.toLowerCase()));
       setDisplay(mathProduct);
       

    }
    return (
        <>
            <div className='search-container'>
            {webIcon}<input
                type="text"
                onChange={handelSearch} 
                placeholder='Search Product'
                />
            </div>
            <div className='shop-container'>
            <div className="product-container">
                {
                    displays.map(product=> <Product
                        key = {product.key}
                        product={product}
                        handeleAdd = {handeleAdd}
                        >

                        </Product>)
                }
            </div>
            <div className="cart-container">
               <div className='cart-cont'>
               <Cart cart ={cart}></Cart>
               </div>
            </div>
            
        </div>
    </>
    );
};

export default Shop;
import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart){
        // product.quantity = !product.quantity ? 1 : product.quantity;
        if(!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity; 
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) / 10;
    const grandTotal = (total +shipping+tax);
    return (
        <div>
            <h3 className='brd'>Order Summary</h3>
            <h5>Items Order: {totalQuantity}</h5>
            <h4 className='cart-sub'>Total:  ${total.toFixed(2)}</h4>
            <h4 className='cart-sub'>Shipping: ${shipping}</h4>
            <h4 className='cart-sub'>Tax: ${tax.toFixed(2)}</h4>
            <h4 className='cart-sub'>Grandtotal: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};
export default Cart;
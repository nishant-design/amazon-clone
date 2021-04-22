import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutItem from './CheckoutItem';
import { useStateValue } from './StateProvider';

function Checkout(){
    const [{basket, user}, dispatch] = useStateValue();
    return(
        <div className="checkout">
            <div className="left__section">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/June/gaming-swm._CB430661085_.jpg"></img>
                
                <div className="shopping__cart__container">
                    <h4 className="user_name">Hello, {user ? user : "Guest"}</h4>
                    <h2 className="checkout__title"> Shopping Cart </h2>
                    
                    {basket.map((item)=>(
                        <CheckoutItem id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
                    ))}

                </div>
            </div>


            <div className="right__section">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
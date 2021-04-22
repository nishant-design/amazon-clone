import React from 'react';
import './CheckoutItem.css';
import { useStateValue } from './StateProvider';

function CheckoutItem(props){
    const [{basket}, dispatch] = useStateValue();
    const {id, title, price, rating, image} = props;

    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id
        })
    }

    return(
        <div className="checkoutItem">
            <img className="checkoutItem__img" src={image}></img>

            <div className="checkoutItem__productInfo">
                <p className="productInfo__title">{title}</p>
                <p className="productInfo__price">
                    <span>&#8377;</span>
                    <strong>{price}</strong>
                </p>
                <div className="productInfo__rating" >
                    {Array(rating).fill().map(()=>
                        <small><p>⭐</p></small>
                    )}
                </div>

                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutItem;
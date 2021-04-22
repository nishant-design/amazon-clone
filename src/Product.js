import react from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product(props){
    const {id, title, price, rating, image} = props;
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title : title,
                image : image,
                price : price,
                rating : rating,
            },
        })
    };

    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small> <strong> &#8377; </strong></small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map(()=>
                        <small><p>⭐</p></small>
                    )}
                </div>
            </div>

            <img className="product__img" src={image}></img>

            <button className="product__btn" onClick={addToBasket}>Add to Cart </button>
        </div>
    )
}

export default Product;

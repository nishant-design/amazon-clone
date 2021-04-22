import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__bannerImage" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/HeroApril21/Brownie_D_JustAsk_2x._CB655446346_.jpg"></img>
            </div>

            <div className="home__row">
                <Product id="1" title="Milton Thermosteel Flip Lid Flask, 1000 milliliters, Silver" price="755" rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81t4Fl4iFnL._SX679_.jpg" />

                <Product id="2" title="Cello Checkers Plastic PET Canister Set, 18 Pieces, Clear" price="499" rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71AsCDQvKGL._SX679_.jpg" />
            </div>

            <div className="home__row">
                <Product id="4" title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)" price="42999" rating={4} image="https://images-na.ssl-images-amazon.com/images/I/41yEVApqsLL._AC_SY780_FMwebp_.jpg" />

                <Product id="5" title="OPPO F19 Pro+ 5G (Space Silver, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers" price="25999" rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71uXmoBZpOL._SX679_.jpg" />

                <Product id="6" title="Vivo V20 Pro 5G Sunset Melody, 8GB RAM, 128GB Storage" price="29999" rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71HLaYtc%2BJL._SY879_.jpg" />
            </div>

            <div className="home__row">
                <Product id="3" title="Samsung 138 cm (55 inches) 4K Ultra HD Smart LED TV 55Q8CN (Black) (2018 model)" price="274900" rating={3} image="https://images-na.ssl-images-amazon.com/images/I/81V%2BhqDbomL._SX679_.jpg" />
            </div>
            
        </div>
    )
}

export default Home;
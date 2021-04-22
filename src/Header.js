import react from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header(){
    const [{basket, user}, dispatch] = useStateValue();
    // console.log(user.split("@").[0]);
    const handleAuthentication = ()=>{
        if(user){
            auth.signOut();
        }
    }

    return(
        <div className="header">
            {/* header logo/img */}
            <Link to="/" style={{textDecoration: 'none'}}>
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            {/* region */}
            <div className="header__region">
                <ion-icon className="location-icon" name="location-outline"></ion-icon>
                <div className="header__region--option">
                    <span className="header__nav--line1">
                        Deliver to
                    </span>
                            
                    <span className="header__nav--line2">
                        Mumbai 400010
                    </span>
                </div>
            </div>

            {/* header searchBar */}
            <div className="header__search">
                <input className="header__search--input" type="text"></input>
                <div className="search-icon"><ion-icon name="search-sharp"></ion-icon></div>
            </div>

            {/* header navigation */}
            <div className="header__nav">
                <Link to="/login" style={{textDecoration: 'none'}}>
                    <div onClick={handleAuthentication} className="header__nav--option">
                        <span className="header__nav--line1">
                            Hello, {user? user?.split("@")[0] : "Guest"}
                        </span>

                        <span className="header__nav--line2">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <div className="header__nav--option">
                    <span className="header__nav--line1">
                        Returns
                    </span>
                        
                    <span className="header__nav--line2">
                        &amp; Order
                    </span>
                </div>

                <div className="header__nav--option">
                    <span className="header__nav--line1">
                        Your
                    </span>

                    <span className="header__nav--line2">
                        Prime
                    </span>
                </div>
            </div>

            <Link to="/checkout" style={{textDecoration: 'none'}}>
                <div className="header__cart">
                    <ion-icon name="cart-outline"></ion-icon>
                    <span className="cart__count">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header;
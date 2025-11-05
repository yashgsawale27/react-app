import { Link } from 'react-router';
import './header.css';

export function Header({ cart }) {
    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });

    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <img className="logo"
                        src="/images/logo-white.png" alt="Site Logo" />

                    <img className="mobile-logo"
                        src="/images/mobile-logo.png" alt="Mobile Logo" />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />
                <button className="search-button">
                    <img className="search-icon" src="\images\icons\search-icon.png" alt="search button" />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src="\images/icons/cart-icon.png" alt="cart icon" />
                    <span className="cart-quantity">{totalQuantity}</span>
                    <span className="cart-text">Cart</span>
                </Link>
            </div>
        </div>
    );
}
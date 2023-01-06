import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../assets/img/pizza-logo.svg';
import cart from '../../assets/img/cart.svg';

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to="/react-pizza">
            <img className="header__logo-img" src={logo} alt="Logo." />
            <div className="header__logo-text">
              <h1>REACT PIZZA</h1>
              <h2>самая вкусная пицца во вселенной</h2>
            </div>
          </Link>
          <Link className="header__cart button" to="/cart">
            <div className="header__cart-price">{totalPrice} ₴</div>
            <div className="header__cart-img">
              <img src={cart} alt="Cart." />
              {totalCount}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

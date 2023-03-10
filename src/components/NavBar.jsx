// START IMPORT //
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logBlack from "../images/logo-black.png";
import logWhite from "../images/logo-white.svg";
import { selectCartProducts } from "../features/cartSlice";
import { changeCartStatus } from "../features/cartStatusSlice";
import { changeMenuStatus } from "../features/menuStatusSlice";
// END IMPORT //

export default function NavBar() {
  // START CONST //
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const cartProducts = useSelector(selectCartProducts);
  const numberOfCartItems = cartProducts.reduce((a, b) => {
    return a + b.quantity;
  }, 0);
  // END CONST //

  // START FUNCTION //
  const onCartClick = (e) => {
    e.preventDefault();
    dispatch(changeCartStatus(true));
  };
  const onMenuClick = (e) => {
    e.preventDefault();
    dispatch(changeMenuStatus(true));
  };
  // END FUNCTION //

  // START RENDER //
  return (
    <nav className={pathname === "/" ? "navbar " : "navbar page"}>
      <div className="nav-center">
        {/* <!-- links --> */}
        <div>
          <button className="toggle-nav" onClick={onMenuClick}>
            <i className="fas fa-bars"></i>
          </button>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- logo --> */}
        <Link to="/" className="nav-link">
          <img
            src={pathname === "/" ? logWhite : logBlack}
            className="nav-logo"
            alt="logo"
          />
        </Link>

        {/* <!-- cart icon --> */}
        <div className="toggle-container">
          <button className="toggle-cart" onClick={onCartClick}>
            <i className="fas fa-shopping-cart"></i>
          </button>
          <span className="cart-item-count">{numberOfCartItems}</span>
        </div>
      </div>
    </nav>
  );
  // END RENDER //
}

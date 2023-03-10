// START IMPORT //
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartStatus, changeCartStatus } from "../features/cartStatusSlice";
import {
  selectCartProducts,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../features/cartSlice";
// END IMPORT //

export default function Cart() {
  // START CONST //
  const cartActiveStatus = useSelector(cartStatus);
  const cartProducts = useSelector(selectCartProducts);
  const dispatch = useDispatch();
  const totalAmount = cartProducts.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  // END CONST //

  // START FUNCTIONS //
  const onCloseClick = (e) => {
    e.preventDefault();
    dispatch(changeCartStatus(false));
  };
  const onRemoveClick = (item) => {
    dispatch(removeFromCart(item.product.id));
  };
  const onIncreaseClick = (item) => {
    dispatch(increaseQuantity(item.product.id));
  };
  const onDecreaseClick = (item) => {
    dispatch(decreaseQuantity(item.product));
  };
  // END FUNCTIONS //

  // START RENDER //
  return (
    <div className={cartActiveStatus ? "cart-overlay show" : "cart-overlay"}>
      <aside className="cart">
        <button className="cart-close" onClick={onCloseClick}>
          <i className="fas fa-times"></i>
        </button>
        <header>
          <h3 className="text-slanted">your bag</h3>
        </header>

        <div className="cart-items">
          {cartProducts.map((product) => {
            return (
              <article className="cart-item" data-id={product.id}>
                <Link
                  to={"/product/" + product.name.replace(/\s+/g, "-")}
                  state={product.id}
                >
                  <img
                    src={product.image}
                    className="cart-item-img"
                    alt="entertainment center"
                  />
                </Link>
                <div>
                  <Link
                    to={"/product/" + product.name.replace(/\s+/g, "-")}
                    state={product.id}
                  >
                    <h4 class="cart-item-name">{product.name}</h4>
                  </Link>
                  <p className="cart-item-price">${product.price / 100}</p>
                  <button
                    className="cart-item-remove-btn"
                    data-id={product.id}
                    onClick={() => onRemoveClick({ product })}
                  >
                    remove
                  </button>
                </div>
                <div>
                  <button
                    className="cart-item-increase-btn"
                    data-id={product.id}
                    onClick={() => onIncreaseClick({ product })}
                  >
                    <i className="fas fa-chevron-up"></i>
                  </button>
                  <p className="cart-item-amount" data-id={product.id}>
                    {product.quantity}
                  </p>
                  <button
                    className="cart-item-decrease-btn"
                    data-id={product.id}
                    onClick={() => onDecreaseClick({ product })}
                  >
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        <footer>
          <h3 className="cart-total text-slanted">
            Total : ${totalAmount / 100}
          </h3>
          <button className="cart-checkout btn">checkout</button>
        </footer>
      </aside>
    </div>
  );
  // END RENDER //
}

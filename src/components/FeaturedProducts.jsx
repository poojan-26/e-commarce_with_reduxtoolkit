// START IMPORT //
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productsData } from "../data/productsData";
import { changeCartStatus } from "../features/cartStatusSlice";
import { addToCart } from "../features/cartSlice";
// END IMPORT //

export default function FeaturedProducts({ name }) {
  // START CONST //
  const shuffledArr = [...productsData].sort(() => 0.5 - Math.random());
  const featuredProducts = shuffledArr.slice(0, 3);
  const dispatch = useDispatch();
  // END CONST //

  // START FUNCTION //
  function onCartClick(product) {
    dispatch(changeCartStatus(true));
    dispatch(addToCart(product));
  }
  // END FUNCTION //

  // START RENDER //
  return (
    <>
      <div className="title">
        <h2>
          <span>/</span> {name}
        </h2>
      </div>
      <div className="featured-center section-center">
        {featuredProducts.map((product) => {
          return (
            <article className="product">
              <div className="product-container">
                <img
                  src={product.fields.image[0].thumbnails.large.url}
                  className="product-img img"
                  alt={product.fields.name}
                />
                <div className="product-icons">
                  <Link
                    to={"/products/" + product.fields.name.replace(/\s+/g, "-")}
                    className="product-icon"
                    state={product.id}
                  >
                    <i className="fas fa-search"></i>
                  </Link>
                  <button
                    className="product-cart-btn product-icon"
                    data-id="rec43w3ipXvP28vog"
                    onClick={() => onCartClick({ product })}
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
              <footer>
                <p className="product-name">{product.fields.name}</p>
                <h4 className="product-price">${product.fields.price / 100}</h4>
              </footer>
            </article>
          );
        })}
      </div>
    </>
  );
  // END RENDER //
}

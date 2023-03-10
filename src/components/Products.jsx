// START IMPORT //
import Hero from "./Hero";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectAllProducts,
  filterProducts,
  searchProducts,
  priceFilterProducts
} from "../features/productsSlice";
import { changeCartStatus } from "../features/cartStatusSlice";
import { addToCart } from "../features/cartSlice";
import { productsData } from "../data/productsData";
// END IMPORT //

export default function Products() {
  // START PAGE TITLE //
  document.title = "Products | Comfy";
  // END PAGE TITLE //

  // START CONST //
  const dispatch = useDispatch();
  const selectedProducts = useSelector(selectAllProducts);
  const [highestPrice, setHighestPrice] = useState(80);
  const [priceValue, setPriceValue] = useState(highestPrice);
  const allCompanyNames = productsData.map((obj) => obj.fields.company);
  const companyNames = [...new Set(allCompanyNames)];

  // END CONST //

  // START FUNCTIONS //
  function onCartClick(product) {
    dispatch(changeCartStatus(true));
    dispatch(addToCart(product));
  }
  const onCompanyClick = (e) => {
    e.preventDefault();
    dispatch(
      filterProducts({
        value: e.target.value
      })
    );
  };
  const onSearchChanged = (e) => {
    let searchString = e.target.value.trim();
    dispatch(
      searchProducts({
        value: searchString
      })
    );
  };
  const onPriceChange = (e) => {
    setPriceValue(e.target.value);
    dispatch(
      priceFilterProducts({
        value: e.target.value
      })
    );
  };
  // END FUNCTIONS //

  // START RENDER //
  return (
    <div>
      <Hero page={"Home / Products"} />
      <section className="products">
        {/* filters */}
        <div className="filters">
          <div className="filters-container">
            {/* search */}
            <form className="input-form">
              <input
                type="text"
                className="search-input"
                placeholder="search..."
                id="searchText"
                name="searchText"
                onChange={onSearchChanged}
              />
            </form>
            {/* categories */}
            <h4>Company</h4>
            <article className="companies">
              <button
                className="company-btn"
                value="all"
                onClick={onCompanyClick}
              >
                all
              </button>
              {companyNames.map((company) => {
                return (
                  <button
                    className="company-btn"
                    value={company}
                    onClick={onCompanyClick}
                  >
                    {company}
                  </button>
                );
              })}
            </article>
            {/* price */}
            <h4>Price</h4>
            <form className="price-form">
              <input
                type="range"
                id="price-filter"
                name="price-filter"
                className="price-filter"
                value={priceValue}
                min="0"
                max="80"
                onChange={onPriceChange}
              />
            </form>
            <p className="price-value">Value: ${priceValue}</p>
          </div>
        </div>

        <div className="products-container">
          <h3
            className="filter-error"
            style={selectedProducts.length === 0 ? null : { display: "none" }}
          >
            sorry, no products matched your search
          </h3>
          {selectedProducts.map((product) => {
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
                      to={
                        "/products/" + product.fields.name.replace(/\s+/g, "-")
                      }
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
                  <h4 className="product-price">
                    ${product.fields.price / 100}
                  </h4>
                </footer>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
  // END RENDER //
}

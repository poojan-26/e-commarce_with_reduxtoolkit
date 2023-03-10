// START IMPORT //
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import { productsData } from "../data/productsData";
import FeaturedProducts from "./FeaturedProducts";
import { changeCartStatus } from "../features/cartStatusSlice";
import { addToCart } from "../features/cartSlice";
// END IMPORT //

export default function SingleProduct() {
  // START PAGE TITLE //
  document.title = "Product | Comfy";
  // END PAGE TITLE //

  // START CONST //
  const location = useLocation();
  const productID = location.state;
  const product = productsData.filter((item) => {
    return item.id === productID;
  })[0];
  const dispatch = useDispatch();
  // END CONST //

  // START FUNCTIONS //
  function onCartClick(e, product) {
    e.preventDefault();
    dispatch(changeCartStatus(true));
    dispatch(addToCart(product));
  }
  dispatch(changeCartStatus(false));
  // END FUNCTIONS //

  // START RENDER //
  return (
    <div>
      <Hero page={"Products / " + product.fields.name} />
      <section class="single-product">
        <div class="section-center single-product-center">
          <img
            src={product.fields.image[0].thumbnails.full.url}
            class="single-product-img img"
            alt={product.fields.name}
          />
          <article class="single-product-info">
            <div>
              <h2 class="single-product-title">{product.fields.name}</h2>
              <p class="single-product-company text-slanted">
                by {product.fields.company}
              </p>
              <p class="single-product-price">${product.fields.price / 100}</p>
              <div class="single-product-colors">
                {product.fields.colors.map((color) => {
                  return (
                    <span
                      class="product-color"
                      style={{ backgroundColor: color }}
                    ></span>
                  );
                })}
              </div>
              <p class="single-product-desc">
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
              <button
                class="addToCartBtn btn"
                data-id="id"
                onClick={(e) => onCartClick(e, { product })}
              >
                add to cart
              </button>
            </div>
          </article>
        </div>
      </section>
      <div>
        <br />
        <br />
      </div>
      <FeaturedProducts name={"You might also like..."} />
    </div>
  );
  // END RENDER //
}

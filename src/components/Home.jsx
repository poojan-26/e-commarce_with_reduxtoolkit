// START IMPORT //
import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
// END IMPORT //

export default function Home() {
  // START PAGE TITLE //
  document.title = "Home | Comfy";
  // END PAGE TITLE //

  // START RENDER //
  return (
    <div>
      <section className="hero">
        <div className="hero-container">
          <h1 className="text-slanted">rest, relax, unwind</h1>
          <h3>Embrace your choices - we do</h3>
          <Link to="/products" className="hero-btn">
            show now
          </Link>
        </div>
      </section>
      <section className="section featured">
        <FeaturedProducts name={"featured"} />
        <Link to="/products" className="btn">
          all products
        </Link>
      </section>
    </div>
  );
  // END RENDER //
}

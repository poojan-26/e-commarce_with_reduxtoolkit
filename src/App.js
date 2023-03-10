import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import SideBar from "./components/SideBar";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            {/* <Route path="/new-post" element={<AddPostForm />} /> */}
          </Routes>

          {/* sidebar */}
          <SideBar />

          {/* cart */}
          <Cart />
        </>
      )}
    </div>
  );
}

export default App;

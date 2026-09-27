import { Link, Route, Routes } from "react-router-dom";
import BottomHeader from "./Components/headers/BottomHeader";
import TopHeader from "./Components/headers/TopHeader";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/SlideProducts/ScrollToTop";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import About from "./Pages/About/About";
import SearchResults from "./Pages/SearchReaults";
import Favourites from "./Pages/Favourites/Favourites";
import Accessories from "./Pages/Accessories/Accessories";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>
      <ScrollToTop/>
   <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
                  <Route path="/search" element={<SearchResults />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/Contact" element={<Contact />} />

        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Category/:category" element={<CategoryPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

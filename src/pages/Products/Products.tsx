import Hero from "./Hero";
import ProductList from "../../components/ProductList";
import Delivery from "../../components/Dev";
import News from "../../components/News";
import Footer from "../../components/Footer";

function Products() {
  return (
    <div>
      <Hero />
      <ProductList />
      <Delivery />
      <News />
      <Footer />
    </div>
  );
}

export default Products;

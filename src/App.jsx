import HeroSection from "./component/HeroSection.jsx";
import Navbar from "./component/Navbar.jsx";
import Product from "./component/Product.jsx";
import TopProduct from "./component/TopProduct.jsx";
import Banner from "./component/Banner.jsx";
import Subscribe from "./component/Subscribe.jsx";
import Testimonial from "./component/Testimonial.jsx";
import Footer from "./component/Footer.jsx";


const App = () => {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Product />
    <TopProduct />
    <Banner />
    <Subscribe />
    <Product />
    <Testimonial />
    <Footer />
    </>
  );
};

export default App;
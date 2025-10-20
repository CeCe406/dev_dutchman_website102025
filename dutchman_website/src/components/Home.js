import Gallery from "./HomePage/gallery";
import Header from "./HomePage/Header";
import Main from "./HomePage/Main";
import Footer from "./HomePage/Footer";
import Map from "./HomePage/AccessMap";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Gallery />
      <Main />
      <Map />
      <Footer />
    </div>
  );
};

export default Home;
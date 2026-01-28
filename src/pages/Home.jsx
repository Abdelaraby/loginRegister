import Features from "../components/Features";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Recommended from "../components/Recommended";
import Sale from "../components/Sale";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <div className=" flex justify-center items-center bg-[url('/src/assets/bg.png')] h-screen bg-center bg-cover bg-no-repeat  ">
        <Nav />
        <SearchBar />
      </div>
      <Features />
      <Slider />
      <Recommended />
      <Sale />
      <Footer />
    </>
  );
};

export default Home;

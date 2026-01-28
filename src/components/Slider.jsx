import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
const Slider = () => {
  return (
    <>
      <div className="bg-[#3B2F4A] py-15">
        <div className="container mx-auto">
          <div className="w-full text-white flex flex-col justify-center items-center ">
            <h1 className="font-bold text-3xl mb-3">Best Seller</h1>
            <p className="w-125 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="carousel carousel-center rounded-box p-10 my-6  ">
            <div className="carousel-item px-7">
              <img src={book1} alt="Burger" className="w-50 " />
            </div>
            <div className="carousel-item px-7">
              <img src={book2} alt="Burger" className="w-50" />
            </div>
            <div className="carousel-item px-7">
              <img src={book3} alt="Burger" className="w-50" />
            </div>
            <div className="carousel-item px-7">
              <img src={book4} alt="Burger" className="w-50" />
            </div>
            <div className="carousel-item px-7">
              <img src={book5} alt="Burger" className="w-50" />
            </div>
            <div className="carousel-item px-7">
              <img src={book6} alt="Burger" className="w-50" />
            </div>
            <div className="carousel-item px-7">
              <img src={book7} alt="Burger" className="w-50" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="btn btn-secondary">Shop now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;

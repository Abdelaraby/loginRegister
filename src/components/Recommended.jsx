import book6 from "../assets/book6.png";
import book4 from "../assets/book4.jpg";
import { FaRegHeart } from "react-icons/fa";
const Recommended = () => {
  return (
    <>
      <div className="bg-gray-300 ">
        <div className="container mx-auto p-10">
          <h1 className="font-bold my-5 text-2xl">Recomended For You</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card rounded  card-side bg-base-100 shadow-sm  ">
              <figure>
                <img
                  src={book6}
                  alt="Movie"
                  className="object-cover bg-center w-50 "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Rich Dad And Poor Dad</h2>
                <p className="">
                  Author:
                  <span className="text-black font-bold">
                    {" "}
                    Robert T. Kiyosanki
                  </span>{" "}
                </p>
                <p className="w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris et ultricies est. Aliquam in justo varius, sagittis
                  neque ut, malesuada leo. Aliquam in justo varius, Aliquam in
                  justo varius,
                </p>
                <div className="flex justify-between">
                  <div className="flex  items-center gap-3">
                    <div className="rating w-15">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="1 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="2 star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="3 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="4 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="5 star"
                      />
                    </div>
                    <span className="text-[10px]  text-gray-400 ">
                      (180 review)
                    </span>
                  </div>
                  <span>$30.00</span>
                </div>
                <span className="text-gray-400">Rate 4.2</span>
                <div className="card-actions">
                  <button className="btn btn-secondary w-[70%]">Watch</button>
                  <button className="btn btn-primary w-[15%] bg-white border-pink-600">
                    <FaRegHeart className=" text-pink-600  " />
                  </button>
                </div>
              </div>
            </div>
            <div className="card rounded  card-side bg-base-100 shadow-sm  ">
              <figure>
                <img
                  src={book4}
                  alt="Movie"
                  className="object-cover bg-center w-50 "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">The Design of books</h2>
                <p className="">
                  Author:
                  <span className="text-black font-bold">
                    {" "}
                    Debbie Berne
                  </span>{" "}
                </p>
                <p className="w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris et ultricies est. Aliquam in justo varius, sagittis
                  neque ut, malesuada leo. Aliquam in justo varius, Aliquam in
                  justo varius,
                </p>
                <div className="flex justify-between">
                  <div className="flex  items-center gap-3">
                    <div className="rating w-15">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="1 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="2 star"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="3 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="4 star"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        aria-label="5 star"
                      />
                    </div>
                    <span className="text-[10px]  text-gray-400 ">
                      (180 review)
                    </span>
                  </div>
                  <span>$30.00</span>
                </div>
                <span className="text-gray-400">Rate 4.2</span>
                <div className="card-actions">
                  <button className="btn btn-secondary w-[70%]">Watch</button>
                  <button className="btn btn-primary w-[15%] bg-white border-pink-600">
                    <FaRegHeart className=" text-pink-600  " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;

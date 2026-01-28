import book6 from "../assets/book6.png";
import { CiShoppingCart } from "react-icons/ci";

const Card = () => {
  return (
    <>
      <div className=" bg-[#3B2F4A] card rounded  card-side shadow-sm  ">
        <figure>
          <img
            src={book6}
            alt="Movie"
            className="object-cover bg-center w-50 "
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-white ">Rich Dad And Poor Dad</h2>
          <p className="">
            Author:
            <span className="text-white font-bold">
              {" "}
              Robert T. Kiyosanki
            </span>{" "}
          </p>
          <div>
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
              <span className="text-[10px]  text-gray-400 ">(180 review)</span>
            </div>
            <span className="text-gray-400">Rate 4.2</span>
            <div className="flex gap-3  items-center">
              <span className="text-[15px] line-through text-gray-400">
                $40.00
              </span>
              <span className="text-[20px] text-white   ">$30.00</span>
            </div>
            <div className="flex flex-col">
              <progress
                className="progress progress-warning w-56"
                value="70"
                max="100"
              ></progress>
              <span className="text-gray-300">4 book left</span>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary border-pink-600">
              <CiShoppingCart className="text-white text-3xl " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

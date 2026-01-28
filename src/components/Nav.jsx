import { RiBookMarkedLine } from "react-icons/ri";
const Nav = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 w-full bg-base-100/50 p-4">
        <div className="container mx-auto flex justify-between">
          <div className=" flex gap-5">
            <div className="flex">
              <RiBookMarkedLine className="text-white text-3xl" />
              <h1 className="text-xl text-white">Book Shop</h1>
            </div>
            <p className="before:content-[''] md:before:content-['|'] ... text-white "></p>
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              Books
            </a>
            <a href="#" className="text-white">
              About
            </a>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-secondary">Login</button>
            <button className="btn bg-white border-pink-500 text-pink-500 hover:bg-amber-100">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;

import { RiBookMarkedLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaEarthAfrica } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal  bg-[#3B2F4A] p-10 ">
        <div className="flex justify-between w-full text-white">
          <nav className="flex flex-row gap-4">
            <div className="flex justify-center items-center gap-1.5">
              <RiBookMarkedLine className="text-2xl" />
              <h6 className="footer-title"> Book Shop</h6>
            </div>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">Book</a>
            <a className="link link-hover">About</a>
          </nav>
          <div className="flex flex-row gap-4">
            <CiFacebook className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaXTwitter className="cursor-pointer" />
          </div>
        </div>
      </footer>

      <footer className=" bg-[#3B2F4A] footer  text-white border-base-300 border-t px-10 py-4 ">
        <div className="flex flex-row justify-between w-full ">
          <p> {`<Developed By> EraaSoft <All Copy Rights Reserved @2024`}</p>
          <div className="flex flex-row justify-center items-center gap-5">
            <FaEarthAfrica />
            <button className="btn btn-secondary">English</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

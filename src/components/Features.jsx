import { FaShippingFast } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { RiDeviceRecoverFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
const Features = () => {
  const cardStyle = "flex flex-col justify-start gap-4 font-sans ";
  return (
    <>
      <div className=" bg-gray-200 py-10 h-100 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 container mx-auto gap-10">
          <div className={cardStyle}>
            <FaShippingFast className="text-2xl" />
            <h1 className="font-bold text-black">Fast & Reliable Shipping</h1>
            <p className="text-[#22222280] text-[15px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className={cardStyle}>
            <MdOutlinePayment className="text-2xl" />
            <h1 className="font-bold text-black">Secure Payment</h1>
            <p className="text-[#22222280] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className={cardStyle}>
            <RiDeviceRecoverFill className="text-2xl" />
            <h1 className="font-bold text-black">Easy Returns</h1>
            <p className="text-[#22222280] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className={cardStyle}>
            <RiCustomerService2Fill className="text-2xl" />
            <h1 className="font-bold text-black">24/7 Customer Support</h1>
            <p className="text-[#22222280] text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

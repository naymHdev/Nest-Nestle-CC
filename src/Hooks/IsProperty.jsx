import propertyImage1 from "../assets/property - 1.jpeg";
import propertyImage2 from "../assets/property - 2.jpeg";
import FindButton from "./FindButton";

const IsProperty = () => {
  return (
    <>
      <div className=" flex gap-8">
        <div className=" flex-1">
          <img src={propertyImage1} alt="" />
          <img src={propertyImage2} alt="" />
        </div>
        <div className=" flex-1">
          <h4 className=" text-[#F06711] text-[18px]">Property buying</h4>
          <h2 className=" text-[#111827] text-5xl mt-5 font-semibold">
            Efficient and Transparent Home Buying Solutions
          </h2>
          <p className=" text-sm mt-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className=" mt-5 ">
            <FindButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default IsProperty;

/* eslint-disable react/prop-types */
import { TfiLocationPin } from "react-icons/tfi";

const DetailsCard = ({ detail }) => {
  const { images, price, location, property_name, details } = detail || {};

  return (
    <>
      <div>
        <div className=" flex items-center justify-between w-full border-b-2 pb-2 ">
          <div>
            <h3 className=" text-xl font-semibold">{property_name}</h3>
            <div className=" flex items-center gap-2 font-medium mt-2">
              <TfiLocationPin className="text-[#EE6612]" />
              <p className=" text-sm text-slate-400">{location}</p>
            </div>
          </div>
          <div>
            <p className=" text-center text-2xl font-extrabold">${price}K</p>
          </div>
        </div>
        {/* Image */}
        <div className=" mt-5">
          <div>
            {images?.map((img, index) => (
              <div key={index}>
                <img className="w-full rounded-md" src={img?.image1} alt="" />
              </div>
            ))}
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
            {images?.map((img, idx) => (
              <div key={idx} className=" mt-4">
                <img className=" rounded-md" src={img.image1} alt="" />
                <img className=" rounded-md" src={img.image2} alt="" />
                <img className=" rounded-md" src={img.image3} alt="" />
              </div>
            ))}
          </div>
        </div>
        {/* Overview */}
      </div>
    </>
  );
};

export default DetailsCard;

/* eslint-disable react/prop-types */
import { TfiLocationPin } from "react-icons/tfi";
import { LiaBedSolid } from "react-icons/lia";
import { MdBathtub, MdBalcony } from "react-icons/md";
import { GiFinishLine } from "react-icons/gi";

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
        <div className="bg-[#F9FAFB] mt-8 p-8 border rounded-md shadow-md">
          <h2 className=" text-2xl font-medium">Overview</h2>
          <div className=" bg-white rounded-md shadow-md p-5 flex items-center justify-evenly mt-5">
            <div className=" flex items-center justify-center gap-2">
              <LiaBedSolid className=" text-xl" />
              <p className=" flex items-center gap-1">
                {details?.bedrooms}
                <span className=" text-gray-400 font-thin">Beds</span>
              </p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <MdBathtub className=" text-xl" />
              <p className=" flex items-center gap-1">
                {details?.bathrooms}
                <span className=" text-gray-400 font-thin">Bath</span>
              </p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <MdBalcony className=" text-xl" />
              <p className=" flex items-center gap-1">
                {details?.bedrooms}
                <span className=" text-gray-400 font-thin">Balcony</span>
              </p>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <GiFinishLine className=" text-xl" />
              <p className=" flex items-center gap-1">
                <span className=" text-gray-400 font-thin">
                  Fully Furnished
                </span>
              </p>
            </div>
          </div>
          <div className="grid md:flex mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className=" space-y-1">
                  <p className=" font-medium text-gray-500">Carpet Area</p>
                  <p className=" font-bold">{details?.carpet_area} sqft</p>
                  <p className=" font-medium text-gray-500">$ 225/sqft</p>
                </div>
                <div className=" mt-5">
                  <p className=" font-medium text-gray-500">Facing</p>
                  <p className=" font-bold">{details?.facing}</p>
                </div>
              </div>
            </div>
            <div>
              <p>Lift 1</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;

/* eslint-disable react/prop-types */
import { TfiLocationPin } from "react-icons/tfi";

const DetailsCard = ({ detail }) => {
  const { images, price, location, property_name, details } = detail || {};

  return (
    <>
      <div>
        <div className=" flex items-center justify-between w-full ">
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
      </div>
    </>
  );
};

export default DetailsCard;

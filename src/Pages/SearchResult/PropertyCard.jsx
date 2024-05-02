/* eslint-disable react/prop-types */
import { TfiLocationPin } from "react-icons/tfi";
import { PiSpinnerGapBold } from "react-icons/pi";
import { GrStatusInfo } from "react-icons/gr";
import { GiSquare } from "react-icons/gi";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const { images, price, location, property_name, details, id } =
    property || {};
  return (
    <>
      <Link to={`/propertyDetails/${id}`}>
        <div className=" flex gap-8 bg-[#F9FAFB] p-6 mt-5 rounded-md w-8/12 shadow-sm">
          <div>
            <div className="bg-[#F9FAFB]">
              {images?.map((img, index) => (
                <div key={index}>
                  <img
                    className=" w-[152px] h-full rounded-md"
                    src={img?.image1}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full">
            <div className=" flex items-center justify-between w-full ">
              <div>
                <h3 className=" text-xl font-semibold">{property_name}</h3>
                <div className=" flex items-center gap-2 font-medium mt-5">
                  <TfiLocationPin className="text-[#EE6612]" />
                  <p className=" text-sm text-slate-400">{location}</p>
                </div>
              </div>
              <div>
                <p className=" text-center text-2xl font-extrabold">${price}</p>
                <button className=" border rounded-md shadow-md px-3 py-2 mt-5">
                  Bid Property
                </button>
              </div>
            </div>
            {/* Details */}
            <div className=" mt-5">
              <div className=" flex items-center gap-2 ">
                <div>
                  <h3 className=" font-medium">Property details</h3>
                </div>
                <div className=" border-b-2 w-9/12" />
              </div>
              <div className=" mt-4 flex items-center justify-between">
                <div className=" flex items-center gap-3">
                  <div className="bg-[#EE6612] rounded-md p-1">
                    <PiSpinnerGapBold className=" text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className=" font-medium">Total Area</h3>
                    <p className="text-sm">
                      {details?.carpet_area} <span>sqft</span>
                    </p>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <div className="bg-[#EE6612] rounded-md p-1">
                    <GrStatusInfo className=" text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className=" font-medium">Status</h3>
                    <p className="text-sm">Ready to move</p>
                  </div>
                </div>
                <div className=" flex items-center gap-3">
                  <div className="bg-[#EE6612] rounded-md p-1">
                    <GiSquare className=" text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className=" font-medium">Construction Time</h3>
                    <p className="text-sm">
                      {details?.age_of_construction} <span>Year</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;

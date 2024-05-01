/* eslint-disable react/prop-types */
import PropertyCard from "./PropertyCard";

const IsProperty = ({ allProperty }) => {
  return (
    <>
      <div>
        <div className=" flex items-center gap-8">
          <button className="bg-[#055AB1] text-white font-medium px-4 py-2 rounded-md">
            properties ({allProperty?.length})
          </button>
          <button className="bg-[#ADD7FE] text-[#4B5563] font-medium px-4 py-2 rounded-md">
            New Projects ({allProperty?.length})
          </button>
          <button className="bg-[#ADD7FE] text-[#4B5563] font-medium px-4 py-2 rounded-md">
            Pre-launch offers ({allProperty?.length})
          </button>
        </div>
        <hr className=" mt-4 w-6/12" />
        <div>
          {allProperty?.map((property) => (
            <PropertyCard key={property?.id} property={property} />
          ))}
        </div>
      </div>
    </>
  );
};

export default IsProperty;

/* eslint-disable react/prop-types */
import PropertyCard from "./PropertyCard";

const IsProperty = ({ allProperty }) => {
  const newProject = allProperty.filter(
    (itm) => itm?.category === "New_Projects"
  );
  const preLaunch = allProperty.filter(
    (itm) => itm?.category === "Pre_launch_offers"
  );

  return (
    <>
      <div>
        <div className=" flex items-center gap-8">
          <button className="bg-[#055AB1] text-white font-medium px-4 py-2 rounded-md">
            properties ({allProperty?.length})
          </button>
          <button className="bg-[#ADD7FE] text-[#4B5563] font-medium px-4 py-2 rounded-md">
            New Projects ({newProject?.length})
          </button>
          <button className="bg-[#ADD7FE] text-[#4B5563] font-medium px-4 py-2 rounded-md">
            Pre-launch offers ({preLaunch?.length})
          </button>
        </div>
        <hr className=" mt-4 md:w-6/12" />
        <h3 className=" text-xl font-medium mt-5">
          {allProperty?.length} results for rental property
        </h3>
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

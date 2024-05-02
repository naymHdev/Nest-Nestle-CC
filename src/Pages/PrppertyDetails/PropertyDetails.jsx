import { useParams } from "react-router-dom";
import useAllProperty from "../../Hooks/useAllProperty";
import DetailsCard from "./DetailsCard";

const PropertyDetails = () => {
  const [allProperty] = useAllProperty();

  const { id } = useParams();
  const details = allProperty?.filter((itm) => itm.id == id);

  return (
    <>
      <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-7 gap-5 mt-5">
        <div className="md:col-span-5">
          <div>
            {details?.map((detail) => (
              <DetailsCard key={detail?.id} detail={detail} />
            ))}
          </div>
        </div>
        <div className="md:col-span-2 border rounded-md"></div>
      </div>
    </>
  );
};

export default PropertyDetails;
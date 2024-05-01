import useProperty from "../../Hooks/useProperty";
import Slider from "react-slick";
import { FaRegSquare } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";

const PopularProperties = () => {
  const [isProperty] = useProperty();
  // console.log(isProperty);

  // const { images, property_name, location, property_type, price } =

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    pauseOnHover: true,
  };

  return (
    <>
      <div className=" w-11/12 mx-auto mt-16">
        <div className=" flex items-center justify-between">
          <h3 className=" text-3xl font-medium">Popular Properties</h3>
          <button className="font-bold underline text-[#055AB1]">
            See all propeety
          </button>
        </div>
        <div className="slider-container mt-12">
          <Slider {...settings}>
            {isProperty.map((property) => (
              <div key={property.id} className="px-2 hover:cursor-pointer">
                <div className="bg-[#F9FAFB]">
                  {property?.images?.map((img, index) => (
                    <div key={index}>
                      <img src={img?.image1} alt="" />
                    </div>
                  ))}
                </div>
                <div className=" px-3 py-2 pt-4 bg-[#F9FAFB]">
                  <div className=" flex items-center justify-between border-b-2 pb-1">
                    <div>
                      <p className=" font-medium">{property?.property_type}</p>
                    </div>
                    <div className=" flex items-center gap-3">
                      <FaRegSquare className="text-[#EE6612] bg-[#EE6612] text-sm" />
                      <p className=" font-medium">Ready to Move</p>
                    </div>
                  </div>
                  <h2 className=" text-2xl mt-2 font-medium">
                    {property?.property_name}
                  </h2>
                  <div className=" flex items-center gap-2 font-medium mt-2">
                    <TfiLocationPin className="text-[#EE6612]" />
                    <p className=" text-sm text-slate-400">
                      {property?.location}
                    </p>
                  </div>
                  <p className=" text-xl font-semibold mt-5">
                    ${property?.price}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className=" flex items-center justify-between mt-16">
          <h3 className=" text-3xl font-medium">New Listed Properties</h3>
          <button className="font-bold underline text-[#055AB1]">
            See all propeety
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularProperties;

/* eslint-disable react/prop-types */
import Slider from "react-slick";

const PopularSlider = ({ property }) => {
  const { images, property_name, location, property_type, price } =
    property || {};

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            {images?.map((img, index) => (
              <div key={index}>
                <img src={img?.image1} alt="" />
              </div>
            ))}
          </div>
          <div>
            <h2>{property_name}</h2>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default PopularSlider;

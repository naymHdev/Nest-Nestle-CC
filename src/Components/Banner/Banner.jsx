import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import video from "../../assets/banner.mp4";

const Banner = () => {
  return (
    <>
      <div className="relative h-[50vh]">
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
        <div className="flex w-full flex-col h-full">
          <video
            className="w-full h-full object-cover z-0"
            src={video}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="absolute top-[100px] w-full opacity-80 z-10">
          <div className="flex items-center justify-center">
            <div className="h-[50vh] flex flex-col justify-center items-center">
              <p className="text-white text-center text-sm">
                Seamlessly connecting you to the heartbeat of India's prime
                properties.
              </p>
              <h2 className="text-[64px] text-white text-center">
                Your Portal to India's
              </h2>
              <h2 className="text-[64px] -mt-8 text-white text-center">
                Exquisite Real Estate
              </h2>
              <div className="flex items-center justify-center mt-5">
                <Link to="/buyerScreens">
                  <button className="font-medium flex items-center justify-center gap-3 bg-[#055AB1] text-white rounded-md px-6 py-3">
                    <FiSearch className="text-xl" />
                    Find Property
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

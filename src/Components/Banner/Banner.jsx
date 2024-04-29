/* eslint-disable react/no-unescaped-entities */
import { FiSearch } from "react-icons/fi";
// import video from "../../assets/banner.mp4";

const Banner = () => {
  return (
    <>
      <div>
        {/* <div className="">
          <video className=" h-[50vh] w-full bg-cover opacity-55" src={video} autoPlay loop muted />
        </div> */}
        <div className="">
          <div className="flex items-center justify-center bg-black">
            <div className="h-[60vh] flex flex-col justify-center items-center">
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
                <button className="font-medium flex items-center justify-center gap-3 bg-[#055AB1] text-white rounded-md px-6 py-3">
                  <FiSearch className="text-xl" />
                  Find Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

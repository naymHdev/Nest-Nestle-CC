const OurTeem = () => {
  return (
    <>
      <div className="w-11/12 mx-auto mt-32">
        <div className=" text-[#EE6612] font-medium flex items-center gap-2">
          <h4>Our Teem</h4>
        </div>
        <h2 className=" mt-4 text-3xl font-bold">
          Discover the Faces Behind Our Success
        </h2>
        <div className=" mt-16">
          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <div className=" mt-16 grid grid-cols-1 md:grid-cols-2 gap-32">
          <div>
            <div className=" text-[#EE6612] font-medium flex items-center gap-2">
              <h4>Meet the Team For Book Consultation</h4>
            </div>
            <div>
              <h2 className=" text-3xl font-bold mt-4">
                Meet the stewards of your heritage journey
              </h2>
              <p className=" text-gray-500 mt-6">
                each member an embodiment of expertise and warmth, dedicated to
                guiding you home, every step of the way.
              </p>
              <div className=" mt-12">
                <button className=" text-slate-50 bg-[#055AB1] rounded-md px-6 py-4">
                  Book Consultation Now
                </button>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[384px] rounded-md" src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeem;

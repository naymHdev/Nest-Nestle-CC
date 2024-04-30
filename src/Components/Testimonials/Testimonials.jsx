/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import p2 from "../../assets/2nd2.jpeg";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Testimonials = () => {
  const [review, setReview] = useState([]);

  const { data: isReviews } = useQuery({
    queryKey: ["isReviews"],
    queryFn: async () => {
      const res = await axios.get();
      console.log(res.data);
    },
  });

  return (
    <>
      <div></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-11/12 mx-auto">
        <div className="bg-[#ECF5FF] rounded-md px-8 py-8">
          <p className=" text-sm text-center text-gray-500">
            "The level of security provided by CypherPlay is unmatched. I feel
            confident using my card for both everyday purchases and travel. It's
            the peace of mind I was looking for."
          </p>
          <div className=" text-center mt-10">
            <div className=" flex items-center justify-center">
              <img className=" rounded-full w-12" src={p2} alt="" />
            </div>
            <h3 className=" font-extrabold mt-2 mb-1">Tony Stark</h3>
            <p className=" text-sm text-gray-500">Marketing manager, XYZ</p>
          </div>
        </div>
        <div className="bg-[#ECF5FF] rounded-md px-8 py-8">
          <p className=" text-sm text-center text-gray-500">
            "The level of security provided by CypherPlay is unmatched. I feel
            confident using my card for both everyday purchases and travel. It's
            the peace of mind I was looking for."
          </p>
          <div className=" text-center mt-10">
            <div className=" flex items-center justify-center">
              <img className=" rounded-full w-12" src={p2} alt="" />
            </div>
            <h3 className=" font-extrabold mt-2 mb-1">Tony Stark</h3>
            <p className=" text-sm text-gray-500">Marketing manager, XYZ</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

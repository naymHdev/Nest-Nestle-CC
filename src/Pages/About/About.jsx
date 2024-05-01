import Stats from "../../Components/States/Stats";
import Testimonials from "../../Components/Testimonials/Testimonials";
import OurTeem from "./OurTeem";

const About = () => {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co/CMZFm1q/about-banner.jpg')] h-64 bg-cover bg-center"></div>
      <div className=" w-11/12 mx-auto">
        <Stats />
        <OurTeem />
        <Testimonials />
      </div>
    </>
  );
};

export default About;

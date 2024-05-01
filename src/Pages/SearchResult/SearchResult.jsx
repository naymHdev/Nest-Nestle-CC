import { Popover, Steps } from "antd";
import Testimonials from "../../Components/Testimonials/Testimonials";
import useAllProperty from "../../Hooks/useAllProperty";
import IsProperty from "./IsProperty";

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

const SearchResult = () => {
  const [allProperty] = useAllProperty();

  const items = [
    {
      title: "$20K",
    },
    {
      title: "$30K",
    },
    {
      title: "$40K",
    },
    {
      title: "$50K",
    },
    {
      title: "$60K",
    },
  ];

  return (
    <>
      <div className=" w-11/12 mx-auto mt-11">
        <IsProperty allProperty={allProperty} />
      </div>
      <div className=" flex items-center justify-center gap-5 mt-16 bg-[#ECF5FF] w-11/12 mx-auto rounded-md p-8">
        <div className=" w-full">
          <h2 className=" text-3xl font-bold">Need a Home Loan?</h2>
          <p className=" text-sm text-gray-700 font-thin">
            Select How much Home loan you can take
          </p>
        </div>
        <div className=" w-full">
          <Steps
            progressDot={customDot}
            labelPlacement="vertical"
            items={items}
          />
        </div>
      </div>
      <h2 className=" text-4xl font-medium text-center mt-16">Testimonials</h2>
      <Testimonials />
    </>
  );
};

export default SearchResult;

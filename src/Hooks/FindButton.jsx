import { FiSearch } from "react-icons/fi";

const FindButton = () => {
  return (
    <>
      <div className="flex  mt-5">
        <button className="font-medium flex items-center justify-center gap-3 bg-[#ECF5FF] text-[#055AB1] rounded-md px-6 py-3">
          <FiSearch className="text-xl" />
          Find Property
        </button>
      </div>
    </>
  );
};

export default FindButton;

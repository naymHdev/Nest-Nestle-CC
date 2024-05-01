import useAllProperty from "../../Hooks/useAllProperty";
import IsProperty from "./IsProperty";

const SearchResult = () => {
  const [allProperty] = useAllProperty();
  return (
    <>
      <div className=" w-11/12 mx-auto mt-11">
        <IsProperty allProperty={allProperty} />
      </div>
    </>
  );
};

export default SearchResult;

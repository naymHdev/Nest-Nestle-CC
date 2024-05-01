import useAllProperty from "../../Hooks/useAllProperty";

const SearchResult = () => {
  const [allProperty] = useAllProperty();
  console.log(allProperty);
  return (
    <>
      {allProperty?.length}

      <div></div>
    </>
  );
};

export default SearchResult;

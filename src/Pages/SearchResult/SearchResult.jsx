import useAllProperty from "../../Hooks/useAllProperty";

const SearchResult = () => {
  const [allProperty] = useAllProperty();
  console.log(allProperty);
  return (
    <>
      {allProperty?.length}

      <div>{allProperty?.map((item) => console.log(item))}</div>
    </>
  );
};

export default SearchResult;

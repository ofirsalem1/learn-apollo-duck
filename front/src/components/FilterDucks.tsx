import React from "react";

const FilterDucks = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    console.log(value);
  };
  return <input type="text" onChange={handleChange} />;
};

export default FilterDucks;

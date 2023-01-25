import React from "react";

const Category = ({ type }) => {
  return (
    <button className="py-2 px-4 ml-4 mr-2 my-3 bg-green rounded-full text-white font-bold">
      {type}
    </button>
  );
};

export default Category;

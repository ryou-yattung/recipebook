import React from "react";
import SearchBarLogo from "./SearchBarLogo";

const SearchBar = () => {
  return (
    <div className="w-[330px] h-10 m-auto my-5 bg-green flex items-center rounded-full">
      <SearchBarLogo className="mx-4" />
      <input
        type="text"
        placeholder="お店を検索"
        className="outline-none bg-green"
      />
    </div>
  );
};

export default SearchBar;

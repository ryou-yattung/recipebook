import React from "react";
import Image from "next/image";
// import Record from "../assets/record.png";

const RecipeMenu = () => {
  const record = ({}) => {
    return "../assets/record.png";
  };
  return (
    <div className="flex flex-col items-center">
      <Image src={record} alt="Record" />
      <p className="mt-2 text-white">レシート履歴</p>
    </div>
  );
};

export default RecipeMenu;

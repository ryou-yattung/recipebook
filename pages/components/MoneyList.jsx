import React from "react";

const MoneyList = ({ name, num, mon }) => {
  return (
    <div className=" flex items-center justify-between font-bold text-white py-2 border-dashed border-b-2 border-green">
      <div className="w-24">{name}</div>
      <p>{num}</p>
      <p>{mon}</p>
    </div>
  );
};

export default MoneyList;

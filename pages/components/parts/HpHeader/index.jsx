import React from "react";

const HpHeader = ({ title }) => {
  return (
    <div className="w-screen h-[105px] relative top-0 bg-yellow">
      <h1 className="text-2xl text-center pt-10 text-white">{title}</h1>
    </div>
  );
};

export default HpHeader;

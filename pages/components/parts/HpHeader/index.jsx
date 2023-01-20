import React from "react";
import Bell from "../../Bell";

const HpHeader = ({ title }) => {
  return (
    <div className="w-screen h-[105px] fixed top-0 z-50 bg-yellow">
      <h1 className="pt-10 text-2xl text-center text-white">{title}</h1>

      <Bell className="absolute right-8 top-10" />
    </div>
  );
};

export default HpHeader;

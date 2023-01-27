import React from "react";
import Link from "next/link";
import Bell from "../../Bell";

const HpHeader = ({ title }) => {
  return (
    <div className="w-screen h-[80px] fixed top-0 z-50 bg-yellow">
      <h1 className="pt-8 text-xl text-center text-white font-bold">{title}</h1>

      <Link href="notification">
        <Bell className="absolute right-8 top-8" />
      </Link>
    </div>
  );
};

export default HpHeader;

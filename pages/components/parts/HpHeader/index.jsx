import React from "react";
import Link from "next/link";
import Bell from "../../Bell";

const HpHeader = ({ title }) => {
  return (
    <div className="w-screen h-[105px] fixed top-0 z-50 bg-yellow">
      <h1 className="pt-10 text-xl text-center text-white font-bold">
        {title}
      </h1>

      <Link href="notification">
        <Bell className="absolute right-8 top-10" />
      </Link>
    </div>
  );
};

export default HpHeader;

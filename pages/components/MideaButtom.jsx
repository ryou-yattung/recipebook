import React from "react";
import Link from "next/link";
import AppleLogo from "./AppleLogo";
import GoogleLogo from "./GoogleLogo";

const MideaButtom = ({ title, link, bgcolor, fontcolor, logo }) => {
  return (
    <div
      className={`w-[300px] my-5 py-3 m-auto flex items-center justify-center ${bgcolor} ${fontcolor} text-center rounded-xl shadow-md`}
    >
      {logo ? (
        <GoogleLogo className=" float-left mr-4" />
      ) : (
        <AppleLogo className=" float-left mr-4" />
      )}

      <Link href={link}>{title}</Link>
    </div>
  );
};

export default MideaButtom;

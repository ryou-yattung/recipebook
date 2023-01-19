import React from "react";
import Image from "next/image";
import LoginTitle from "./components/LoginTitle";
import Step03 from "./assets/step03.png";

const connectConform = () => {
  return (
    <div className="w-screen h-screen bg-bgColor">
      <LoginTitle title="電子決済と連携" />

      <div className="w-52 mx-auto my-5">
        <Image src={Step03} alt="step" />
      </div>
    </div>
  );
};

export default connectConform;

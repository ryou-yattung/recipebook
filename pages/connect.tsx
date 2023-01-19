import React from "react";
import Image from "next/image";
import LoginTitle from "./components/LoginTitle";
import Step02 from "./assets/step02.png";
import Buttom from "./components/Buttom";
import Paypay from "./components/Paypay";

const connect = () => {
  return (
    <div className="w-screen h-screen bg-bgColor">
      <LoginTitle title="電子決済と連携" />

      <div className="w-52 mx-auto my-5">
        <Image src={Step02} alt="step" />
      </div>

      <div className="w-3/4 mx-auto mt-20 mb-40 grid grid-cols-3 gap-5">
        <Paypay className="opacity-50" />
        <Paypay className="opacity-50" />
        <Paypay className="opacity-50" />
        <Paypay className="opacity-50" />
      </div>

      <div className="absolute bottom-12 right-0 left-0 m-auto">
        <Buttom
          title="次へ"
          link="/connectConform"
          bgcolor="bg-green"
          fontcolor="text-white"
        />
      </div>
    </div>
  );
};

export default connect;

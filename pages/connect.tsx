import React from "react";
import Image from "next/image";
import LoginTitle from "./components/LoginTitle";
import Step02 from "./assets/step02.png";
import Buttom from "./components/Buttom";

const connect = () => {
  return (
    <div className="w-screen h-screen bg-bgColor">
      <LoginTitle title="電子決済と連携" />

      <div className="w-52 mx-auto my-5">
        <Image src={Step02} alt="step" />
      </div>

      <div>
        <Buttom
          title="ログインする"
          link="/connectConform"
          bgcolor="bg-green"
          fontcolor="text-white"
        />
      </div>
    </div>
  );
};

export default connect;

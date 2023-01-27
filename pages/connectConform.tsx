import React from "react";
import Image from "next/image";
import LoginTitle from "./components/LoginTitle";
import Step03 from "./assets/step03.png";
import LoginButtom from "./components/parts/LoginButtom";
import paymentConnect from "./assets/paymentConnect.png";
import CheckBoxList from "./components/CheckBoxList";

const connectConform = () => {
  return (
    <div className="w-screen h-screen bg-bgColor">
      <LoginTitle title="電子決済と連携" />

      <div className="w-52 mx-auto my-5">
        <Image src={Step03} alt="step" />
      </div>

      <div className="w-3/4 mt-20 mx-auto flex flex-col items-center gap-8">
        <div>
          <Image src={paymentConnect} alt="paymentConnect" className="w-40" />
        </div>

        <div className="text-fontColor text-center">
          <p>
            レシブックと
            <br />
            payPayアカウントを連携します。
          </p>
        </div>

        <div className="opacity-50">以下の点への同意が必要です。</div>

        <div className="">
          <CheckBoxList />
          <CheckBoxList />
        </div>
      </div>

      <LoginButtom
        title1="上記に同意して連携する"
        link1="/homepage"
        title2="同意しない"
        link2="/connect"
        height="mt-20"
      />
    </div>
  );
};

export default connectConform;

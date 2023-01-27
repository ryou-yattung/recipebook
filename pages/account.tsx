import React from "react";
import Image from "next/image";
import LoginTitle from "./components/LoginTitle";
import Step01 from "./assets/step01.png";
import MideaButtomPart from "./components/parts/MideaButtomPart";
import Or from "./components/Or";
import Buttom from "./components/Buttom";
import InputCpn from "./components/InputCpn";

const account = () => {
  return (
    <div className="relative w-screen h-auto py-20  bg-bgColor">
      <LoginTitle title="アカウントを作成" />

      <div className="w-52 mx-auto my-5">
        <Image src={Step01} alt="step" />
      </div>

      <div className="w-[300px] h-[200px] m-auto mt-10">
        <InputCpn placeholder="名前を入力してください" logo={true} />
        <InputCpn placeholder="メールアドレスを入力してください" logo={true} />
        <InputCpn placeholder="パスワードを入力してください" logo={false} />
      </div>

      <div className="mt-10">
        <Buttom
          title="次に"
          link="/connect"
          bgcolor="bg-green"
          fontcolor="text-white"
        />
        <Or />
      </div>

      <MideaButtomPart />

      <div className="w-5/6 m-auto">
        <p className="text-[10px] text-center text-fontColor">
          登録すると利用規約、プライバシーポリシー、
          <br />
          Cookieの使用に同意したものとされます。
        </p>
      </div>
    </div>
  );
};

export default account;

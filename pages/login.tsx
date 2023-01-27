import React, { useState } from "react";
import Letter from "./components/InputLetter";
import Buttom from "./components/Buttom";
import Or from "./components/Or";
import LoginButtom from "./components/parts/LoginButtom";
import LoginTitle from "./components/LoginTitle";
import InputCpn from "./components/InputCpn";
import MideaButtomPart from "./components/parts/MideaButtomPart";

const login = () => {
  const email = true;
  const password = false;
  return (
    <div className="w-screen h-screen bg-bgColor">
      <LoginTitle title="ログイン" />

      {/* input */}
      <div className="w-[300px] h-[200px] m-auto">
        <InputCpn placeholder="メールアドレスを入力してください" logo={email} />
        <InputCpn placeholder="パスワードを入力してください" logo={password} />
        <p className="w-36 text-[12px] border-b-2 border-fontColor text-fontColor float-right">
          パスワードをお忘れですか
        </p>
      </div>

      <Buttom
        title="ログインする"
        link="/homepage"
        bgcolor="bg-green"
        fontcolor="text-white"
      />

      <div className="mt-20">
        <Or />
      </div>

      <MideaButtomPart />
    </div>
  );
};

export default login;

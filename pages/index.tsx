import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import logo from "./assets/nameLogo.png";
import welcome from "./assets/welcome.png";
import LoginButtom from "./components/parts/LoginButtom";

const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen bg-bgColor">
      <Head>
        <title>recipebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-[200px]">
        <Image src={welcome} alt="logo" className="h-10 w-auto mx-auto my-2" />
        <Image src={logo} alt="logo" className="h-16 w-auto mx-auto" />
      </div>

      <div className="my-10 text-xs text-center text-fontColor">
        <p>
          レシブックは電子決済するだけで、
          <br />
          レシートとお金を管理できるアプリです。
        </p>
      </div>

      <LoginButtom
        title1="新規会員登録はこちら"
        link1="/account"
        title2="ログインする"
        link2="/login"
      />
    </div>
  );
};

export default Home;

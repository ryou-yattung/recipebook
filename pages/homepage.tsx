import React from "react";
import Image from "next/image";
import HpHeader from "./components/parts/HpHeader";
import HpFooterPart from "./components/parts/HpFooterPart";
import qrcode from "./assets/qrCode.png";
// import RecipeMenu from "./components/RecipeMenu";
import Record from "./assets/record.png";
import Bag from "./assets/bag.png";
import Gift from "./assets/gift.png";
import Link from "next/link";
import ResBg from "./assets/resBg.png";

const homepage = () => {
  return (
    <div className="w-screen h-screen relative z-10 mt-[105px] bg-bgColor">
      <HpHeader title="ホーム" />

      {/* code */}
      <div className="">
        <div className="relative w-full h-[180px] bg-white flex flex-col items-center justify-between">
          <Image src={qrcode} alt="qrcode" className="mt-8" />

          <div className="absolute bottom-0 w-[300px] h-[37px] m-auto p-2 bg-greenDark2 text-white  rounded-t-xl text-center">
            こんにちは、つむぎさま
          </div>
        </div>

        <div>
          <section className="w-5/6 my-8 mx-auto flex justify-between items-center">
            <div className="w-[160px] h-[120px] relative flex flex-col justify-center items-center text-white">
              <h3 className="text-md mb-1 z-50">今月総支出</h3>
              <p className="text-2xl z-50">¥ 150000</p>
              <Image src={ResBg} alt="ResBg" className="absolute z-10" />
            </div>

            <div className="w-[160px] h-[120px] relative flex flex-col justify-center items-center text-white">
              <h3 className="text-md mb-1 z-50">レシート枚数</h3>
              <p className="text-2xl z-50">21枚</p>
              <Image src={ResBg} alt="ResBg" className="absolute z-10" />
            </div>
          </section>

          <section className="mb-8">
            <div className="mb-8 flex justify-between text-fontColor">
              <h2 className="ml-5">今持ってるレシート</h2>
              <p className="mr-5">もっと見る</p>
            </div>

            <div className="w-20 h-20 ml-5 rounded-full bg-yellow"></div>
          </section>

          <section className="w-[360px] h-[130px] flex items-center justify-center gap-10 bg-greenDark2 rounded-lg m-auto text-[12px]">
            {/* <RecipeMenu /> */}
            <Link href="/" className="flex flex-col items-center">
              <Image src={Record} alt="Record" />
              <p className="mt-2 text-white">レシート履歴</p>
            </Link>

            <Link href="/" className="flex flex-col items-center">
              <Image src={Gift} alt="Record" />
              <p className="mt-2 text-white">獲得した特典</p>
            </Link>

            <Link href="/" className="flex flex-col items-center">
              <Image src={Bag} alt="Record" />
              <p className="mt-2 text-white">クーポンかご</p>
            </Link>
          </section>
        </div>
      </div>

      <HpFooterPart homeColor={true} />
    </div>
  );
};

export default homepage;

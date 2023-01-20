import React from "react";
import Image from "next/image";
import HpHeader from "./components/parts/HpHeader";
import HpFooterPart from "./components/parts/HpFooterPart";
import qrcode from "./assets/qrcode.png";
import Record from "./assets/record.png";

const homepage = () => {
  return (
    <div className="w-screen h-screen relative z-10 mt-[105px] bg-bgColor">
      <HpHeader title="ホーム" />

      {/* code */}
      <div className="">
        <div className="relative w-full h-[200px] bg-white flex flex-col items-center justify-between">
          <Image src={qrcode} alt="qrcode" className="mt-10" />

          <div className="absolute bottom-0 w-[300px] h-[37px] m-auto p-2 bg-greenDark text-white  rounded-t-xl text-center">
            こんにちは、つむぎさま
          </div>
        </div>

        <div>
          <section className="w-5/6 my-10 mx-auto flex justify-between items-center">
            <div className="w-[160px] h-[120px] bg-resBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-white">
              <h3 className="text-md mb-1">今月総支出</h3>
              <p className="text-2xl">¥ 150000</p>
            </div>

            <div className="w-[160px] h-[120px] bg-resBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center text-white">
              <h3 className="text-md mb-1">レシート枚数</h3>
              <p className="text-2xl">21枚</p>
            </div>
          </section>

          <section className="mb-10">
            <div className="mb-8 flex justify-between text-fontColor">
              <h2 className="ml-5">今持ってるレシート</h2>
              <p className="mr-5">もっと見る</p>
            </div>

            <div className="w-20 h-20 ml-5 rounded-full bg-fontColor"></div>
          </section>

          <section className="w-[360px] h-[130px] bg-greenDark rounded-lg m-auto"></section>
        </div>
      </div>

      <HpFooterPart />
    </div>
  );
};

export default homepage;

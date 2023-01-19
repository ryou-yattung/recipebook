import React from "react";
import HpHeader from "./components/parts/HpHeader";
import HpFooterPart from "./components/parts/HpFooterPart";

const homepage = () => {
  return (
    <div className="w-screen h-screen bg-bgColor">
      <HpHeader title="ホーム" />

      {/* code */}
      <div>
        <div className="w-[300px] h-[37px] m-auto p-2 bg-greenDark text-white  rounded-t-xl text-center ">
          こんにちは、つむぎさま
        </div>

        <div>
          <div className="">
            <h3>今月総支出</h3>
            <p>¥ 150000</p>
          </div>

          <div>
            <h2>今持ってるレシート</h2>
            <p>もっと見る</p>
          </div>

          <div></div>
        </div>
      </div>

      <HpFooterPart />
    </div>
  );
};

export default homepage;

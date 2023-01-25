import React from "react";
import HpHeader from "./components/parts/HpHeader";
import HpFooterPart from "./components/parts/HpFooterPart";

const recipe = () => {
  return (
    <div className="w-screen h-screen relative z-10 py-[105px] bg-bgColor">
      <HpHeader title="レシートを集まる" />

      <section>
        <div className="w-full h-8 text-[12px] flex items-end text-fontColor border-b-2 border-greenDark2">
          <h2 className="relative w-1/2 text-center after:absolute after:right-0 after:left-0 after:w-28 after:h-1 after:mx-auto after:block after:bg-greenDark3 ">
            レシート一覧
          </h2>
          <h2 className="w-1/2 text-center">お店を探す</h2>
        </div>

        <div className="w-[90%] mt-8 mx-auto flex items-center justify-between flex-wrap">
          <div className="w-16 h-16 rounded-full bg-yellow"></div>
          <div className="w-16 h-16 rounded-full bg-yellow"></div>
          <div className="w-16 h-16 rounded-full bg-yellow"></div>
          <div className="w-16 h-16 rounded-full bg-yellow"></div>
          <div className="w-16 h-16 rounded-full bg-yellow"></div>
        </div>
      </section>

      <HpFooterPart homeColor={false} recipeColor={true} couponCoulor={false} />
    </div>
  );
};

export default recipe;

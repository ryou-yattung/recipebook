import React from "react";
import HpFooterPart from "./components/parts/HpFooterPart";
import HpHeader from "./components/parts/HpHeader";

const mypage = () => {
  return (
    <div className="w-screen h-screen relative z-10 py-[105px] bg-bgColor">
      <HpHeader title="マイページ" />

      <HpFooterPart
        homeColor={false}
        recipeColor={false}
        couponCoulor={false}
        bookCoulor={false}
        youCoulor={true}
      />
    </div>
  );
};

export default mypage;

import React from "react";
import HpFooterPart from "./components/parts/HpFooterPart";
import HpHeader from "./components/parts/HpHeader";

const book = () => {
  return (
    <div className="w-screen h-screen relative z-10 py-[105px] bg-bgColor">
      <HpHeader title="家計簿" />

      <HpFooterPart
        homeColor={false}
        recipeColor={false}
        couponCoulor={false}
        bookCoulor={true}
      />
    </div>
  );
};

export default book;

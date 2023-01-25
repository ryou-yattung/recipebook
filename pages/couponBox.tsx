import React from "react";
import HpFooterPart from "./components/parts/HpFooterPart";
import HpHeader from "./components/parts/HpHeader";
import CouponList from "./components/CouponList";

const couponBox = () => {
  return (
    <div className="w-screen h-screen relative z-10 py-[105px] bg-bgColor">
      <HpHeader title="クーポンかご" />

      <CouponList />

      <HpFooterPart homeColor={false} recipeColor={true} couponCoulor={false} />
    </div>
  );
};

export default couponBox;

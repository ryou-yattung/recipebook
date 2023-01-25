import React from "react";
import CouponList from "./components/CouponList";
import HpFooterPart from "./components/parts/HpFooterPart";
import HpHeader from "./components/parts/HpHeader";

const coupon = () => {
  return (
    <div className="w-screen h-screen relative z-10 py-[105px] bg-bgColor">
      <HpHeader title="クーポンかご" />

      <HpFooterPart homeColor={false} recipeColor={false} couponCoulor={true} />
    </div>
  );
};

export default coupon;

import React from "react";
import Like from "./Like";

const CouponList = () => {
  return (
    <div className="flex items-center justify-around py-8 border-b-1 border-bo">
      <div className="w-16 h-16 rounded-full bg-yellow"></div>

      <div>
        <h2 className="text-xl text-fontColor font-bold">
          カレーハウスCoCo壱番屋
        </h2>
        <p className="text-sm text-iFontColor">利用可能クーポン３枚</p>
      </div>

      <Like />
    </div>
  );
};

export default CouponList;

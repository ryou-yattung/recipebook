import Image from "next/image";
import React from "react";
import CouponList from "./components/CouponList";
import HpFooterPart from "./components/parts/HpFooterPart";
import HpHeader from "./components/parts/HpHeader";
import bgCover from "./assets/couponCover.png";
import SearchBar from "./components/SearchBar";
import Category from "./components/Category";
import couponPng from "./assets/couponPng.png";

const coupon = () => {
  return (
    <div className="w-screen h-screen relative z-10 py-[105px] bg-bgColor">
      <HpHeader title="クーポンかご" />

      <Image src={bgCover} alt="bgCover" className="w-full h-auto" />

      <SearchBar />

      <section className="mb-8">
        <div className="mb-5 flex justify-between text-fontColor font-bold">
          <h2 className="ml-5">人気のプランド</h2>
          <p className="mr-5">もっと見る</p>
        </div>

        <div className="w-20 h-20 ml-5 rounded-full bg-yellow"></div>
      </section>

      <section className="mb-8">
        <h2 className="ml-5 text-fontColor font-bold">クーポンのカテゴリー</h2>

        <Category type="すべて" />
        <Image src={couponPng} alt="couponPng" className="m-auto" />
        <Image src={couponPng} alt="couponPng" className="m-auto" />
        <Image src={couponPng} alt="couponPng" className="m-auto" />
      </section>

      <HpFooterPart
        homeColor={false}
        recipeColor={false}
        couponCoulor={true}
        bookCoulor={false}
        youCoulor={false}
      />
    </div>
  );
};

export default coupon;

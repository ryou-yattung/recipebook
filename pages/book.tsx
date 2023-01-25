import React from "react";
import Image from "next/image";
import HpFooterPart from "./components/parts/HpFooterPart";
import HpHeader from "./components/parts/HpHeader";
import money from "./assets/money.png";
import MoneyList from "./components/MoneyList";

const book = () => {
  const moneyName = [
    { id: 1, mon: "家賃", num: "30%", name: "￥45000" },
    { id: 2, mon: "食費", num: "22%", name: "￥33000" },
    { id: 3, mon: "ファッション", num: "15%", name: "￥27000" },
    { id: 4, mon: "交際費", num: "10%", name: "￥15000" },
    { id: 5, mon: "光熱費", num: "9%", name: "￥13500" },
    { id: 6, mon: "交通費", num: "6%", name: "￥9000" },
  ];
  return (
    <div className="w-screen h-screen relative z-10 py-[105px] bg-bgColor">
      <HpHeader title="家計簿" />

      <section className="w-full h-14 bg-bgColor2 flex items-center justify-between text-iFontColor">
        <div className="ml-5">11/01 - 11/30</div>
        <div className="mr-5">合計　¥ 150000</div>
      </section>

      <Image src={money} alt="money" className="mx-auto my-8" />

      <section className="w-full h-auto bg-greenDark2 px-12 pb-10">
        {moneyName.map((item) => (
          <MoneyList
            key={item.id}
            name={item.mon}
            num={item.num}
            mon={item.name}
          />
        ))}
      </section>

      <HpFooterPart
        homeColor={false}
        recipeColor={false}
        couponCoulor={false}
        bookCoulor={true}
        youCoulor={false}
      />
    </div>
  );
};

export default book;

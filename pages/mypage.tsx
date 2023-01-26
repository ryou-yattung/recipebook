import React from "react";
import HpFooterPart from "./components/parts/HpFooterPart";
import HpHeader from "./components/parts/HpHeader";
import MypagePro from "./components/MypagePro";
import SmileLoge from "./components/SmileLogo";
import MailLogo from "./components/MailLogo";
import TicketLogo from "./components/TicketLogo";
import RankingLogo from "./components/RankingLogo";

const mypage = () => {
  return (
    <div className="w-screen h-screen relative z-10 py-[105px] bg-bgColor">
      <HpHeader title="マイページ" />

      <MypagePro />

      <section className="flex items-center justify-around text-sm font-bold text-fontColor my-10">
        <div className="w-18 text-center">
          <SmileLoge className="m-auto mb-4" />
          <p>会員情報</p>
        </div>

        <div className="w-18 text-center">
          <MailLogo className="m-auto mb-4" />
          <p>お知らせ</p>
        </div>

        <div className="w-18 text-center">
          <TicketLogo className="m-auto mb-4" />
          <p>クーポン履歴</p>
        </div>

        <div className="w-18 text-center">
          <RankingLogo className="m-auto mb-4" />
          <p>会員ランク</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-fontColor text-center border-b-2 border-greenDark2 pb-2">
          設定
        </h2>
      </section>

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

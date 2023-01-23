import React from "react";
import Image from "next/image";
import HomeLogo from "./footerLogo/HomeLogo";
import RecipeLogo from "./footerLogo/RecipeLogo";
import BookLogo from "./footerLogo/BookLogo";
import Coupon from "./footerLogo/Coupon";
import You from "./footerLogo/You";
import footerBg from "./footerLogo/footerBg.png";
import Link from "next/link";

const HpFooterPart = ({ homeColor }) => {
  return (
    <footer className="w-screen h-[80px] fixed bottom-0">
      <div className="w-full absolute z-10 bottom-0">
        <Image src={footerBg} alt="footerBg" className="w-full" />
      </div>

      <div className="relative z-20 w-full h-full flex items-center justify-around text-[12px] font-bold">
        <Link href="homepage" className="text-center">
          <HomeLogo
            className={
              homeColor
                ? `fill-greenDark3 m-auto mb-2`
                : `fill-white m-auto mb-2`
            }
          />
          <p className={homeColor ? `text-greenDark3` : `text-white`}>ホーム</p>
        </Link>

        <Link href="/">
          <RecipeLogo className="fill-white m-auto mb-2" />
          <p className={`text-white`}>レシート</p>
        </Link>

        <Link href="/">
          <BookLogo className="fill-white m-auto mb-2" />
          <p className={`text-white`}>家計簿</p>
        </Link>

        <Link href="/">
          <Coupon className="fill-white m-auto mb-2" />
          <p className={`text-white`}>クーポン</p>
        </Link>

        <Link href="/">
          <You className="fill-white m-auto mb-2" />
          <p className={`text-white`}>あなた</p>
        </Link>
      </div>
    </footer>
  );
};

export default HpFooterPart;

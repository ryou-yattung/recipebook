import React from "react";
import Image from "next/image";
import mypageIcon from "../assets/mypagePng.png";
import mypageLv from "../assets/mypageLv.png";
import mypageBg from "../assets/mypageBg.png";

const MypagePro = () => {
  return (
    <section className="relative z-10 w-screen h-36">
      <Image
        src={mypageBg}
        alt="mypageBg"
        className="w-full h-auto absolute z-10"
      />

      <div className="w-[90%] relative z-50 flex justify-between m-auto">
        <div className="flex items-center pt-5">
          <Image src={mypageIcon} alt="icon" />
          <div className="ml-4 text-fontColor font-bold">
            <h2 className="text-2xl">つむぎ様</h2>
            <p className="text-[12px] mt-1">会員番号：09876543</p>
          </div>
        </div>

        <div className="">
          <Image src={mypageLv} alt="mypageLv" />
        </div>
      </div>
    </section>
  );
};

export default MypagePro;

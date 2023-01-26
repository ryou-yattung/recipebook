import React from "react";

const MypageList = ({ text }) => {
  return (
    <div className="flex items-center justify-between py-3 mx-5 border-dashed border-b-2 border-greenDark2 text-fontColor2">
      <p className="text-sm">{text}</p>
      <span>&gt;</span>
    </div>
  );
};

export default MypageList;

import React from "react";
import CheckBox from "./CheckBox";

const CheckBoxList = () => {
  return (
    <div className="flex items-center mb-2 text-fontColor">
      <CheckBox className="w-6 mr-3" />
      <p className="text-sm">paypayの情報のアクセスを許可する。</p>
    </div>
  );
};

export default CheckBoxList;

import React from "react";
import MideaButtom from "../../MideaButtom";

const MideaButtomPart = () => {
  return (
    <div>
      <MideaButtom
        title="Googleでログインする"
        link="/"
        bgcolor="bg-white"
        fontcolor="text-fontcolor"
        logo={true}
      />

      <MideaButtom
        title="Appleでログインする"
        link="/"
        bgcolor="bg-black"
        fontcolor="text-white"
        logo={false}
      />
    </div>
  );
};

export default MideaButtomPart;

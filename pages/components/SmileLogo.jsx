import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.971 1a18.971 18.971 0 100 37.942 18.971 18.971 0 000-37.942zm0 35.232a16.26 16.26 0 110-32.521 16.26 16.26 0 010 32.52z"
        fill="#635B52"
        stroke="#635B52"
      />
      <path
        d="M13.873 13.195a3.387 3.387 0 103.388 3.388 3.361 3.361 0 00-3.388-3.387zM26.069 13.195a3.387 3.387 0 103.388 3.388 3.361 3.361 0 00-3.388-3.387zM19.971 30.812a10.842 10.842 0 009.282-5.272l-2.317-1.355a8.13 8.13 0 01-13.93 0l-2.317 1.355a10.84 10.84 0 009.282 5.272z"
        fill="#635B52"
        stroke="#635B52"
      />
    </svg>
  );
}

export default SvgComponent;

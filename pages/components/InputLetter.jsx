import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.75 5H6.25A3.75 3.75 0 002.5 8.75v12.5A3.75 3.75 0 006.25 25h17.5a3.75 3.75 0 003.75-3.75V8.75A3.75 3.75 0 0023.75 5zm-.837 2.5L15 13.438 7.088 7.5h15.825zm.837 15H6.25A1.25 1.25 0 015 21.25V9.062L14.25 16a1.25 1.25 0 001.5 0L25 9.062V21.25a1.25 1.25 0 01-1.25 1.25z"
        fill="#635B52"
      />
    </svg>
  );
}

export default SvgComponent;

import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={27}
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 9H22a1.25 1.25 0 011.25 1.25v15A1.25 1.25 0 0122 26.5H2a1.25 1.25 0 01-1.25-1.25v-15A1.25 1.25 0 012 9h2.5V7.75a7.5 7.5 0 0115 0V9zM17 9V7.75a5 5 0 00-10 0V9h10zm-6.25 7.5V19h2.5v-2.5h-2.5zm-5 0V19h2.5v-2.5h-2.5zm10 0V19h2.5v-2.5h-2.5z"
        fill="#635B52"
      />
    </svg>
  );
}

export default SvgComponent;

import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={27}
      height={30}
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.375 30a3.75 3.75 0 003.748-3.75H9.627A3.75 3.75 0 0013.375 30zm12.62-8.772c-1.132-1.216-3.25-3.046-3.25-9.04 0-4.553-3.192-8.198-7.496-9.092V1.875a1.875 1.875 0 10-3.748 0v1.221c-4.304.894-7.496 4.539-7.496 9.091 0 5.995-2.118 7.825-3.25 9.04A1.83 1.83 0 00.25 22.5c.006.96.76 1.875 1.88 1.875h22.49c1.12 0 1.874-.914 1.88-1.875a1.83 1.83 0 00-.505-1.272z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;

import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={25}
      height={26}
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.691 21.382c2.372 0 4.676-.794 6.544-2.256l5.875 5.875 1.89-1.89-5.875-5.874a10.628 10.628 0 002.257-6.546C21.382 4.796 16.586 0 10.692 0 4.795 0 0 4.796 0 10.691c0 5.895 4.796 10.691 10.691 10.691zm0-18.71c4.422 0 8.019 3.597 8.019 8.02 0 4.421-3.597 8.018-8.019 8.018-4.422 0-8.018-3.597-8.018-8.019 0-4.422 3.596-8.018 8.018-8.018z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <path
        d="M12.578 8.802a2.66 2.66 0 01.786 1.89h2.673a5.315 5.315 0 00-1.57-3.78c-2.022-2.02-5.53-2.02-7.552 0l1.887 1.892c1.015-1.013 2.766-1.01 3.776-.002z"
        fill="#fff"
        fillOpacity={0.5}
      />
    </svg>
  );
}

export default SvgComponent;
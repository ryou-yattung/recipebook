import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={29}
      height={27}
      viewBox="0 0 29 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 22.981V4.467C0 1.557 2.883.5 4.821.5h20.893c1.773 0 3.214 1.186 3.214 2.645v18.514H4.841c-.743.016-1.627.256-1.627 1.322s.884 1.307 1.627 1.323h24.087v2.645H4.821C2.883 26.949 0 25.892 0 22.98zm13.329-6.61v2.49h2.736v-2.49h3.24v-1.7h-3.24v-1.862h3.24v-1.72h-2.586l4.03-6.346h-3.06L15.4 8.676l-.633 1.423-.658-1.413-2.233-3.943H8.77l4.007 6.346H9.937v1.72h3.392v1.862H9.937v1.7h3.392z"
      />
    </svg>
  );
}

export default SvgComponent;

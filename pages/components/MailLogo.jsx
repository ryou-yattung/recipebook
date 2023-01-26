import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={45}
      height={38}
      viewBox="0 0 45 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="a" fill="#fff">
        <path d="M27.375 3.425H4.842c-1.03 0-2.019.453-2.748 1.258C1.366 5.488.957 6.58.957 7.72v25.768c0 1.139.409 2.231 1.137 3.037.729.805 1.717 1.258 2.748 1.258h32.51c1.03 0 2.019-.453 2.747-1.258.729-.806 1.138-1.898 1.138-3.037v-14.71" />
      </mask>
      <path
        d="M27.375 7.425a4 4 0 100-8v8zm-22.533-4v-4 4zM.957 7.72h-4 4zm44.28 11.059a4 4 0 10-8 0h8zM27.375-.575H4.842v8h22.533v-8zm-22.533 0C2.614-.575.569.407-.872 2l5.933 5.366c.01-.01 0 .004-.04.023a.437.437 0 01-.18.036v-8zM-.872 2C-2.3 3.579-3.043 5.642-3.043 7.72h8c0-.2.075-.322.104-.354L-.872 2zm-2.171 5.72v25.768h8V7.72h-8zm0 25.768c0 2.078.742 4.14 2.171 5.72l5.933-5.367a.56.56 0 01-.104-.353h-8zm2.171 5.72c1.44 1.593 3.486 2.575 5.714 2.575v-8c.074 0 .136.017.178.036.04.019.05.034.04.022l-5.932 5.367zm5.714 2.575h32.51v-8H4.842v8zm32.51 0c2.228 0 4.273-.982 5.714-2.575l-5.933-5.367c-.01.012 0-.003.04-.022a.435.435 0 01.18-.036v8zm5.714-2.575c1.428-1.58 2.171-3.642 2.171-5.72h-8a.56.56 0 01-.104.353l5.933 5.367zm2.171-5.72v-14.71h-8v14.71h8z"
        fill="#635B52"
        mask="url(#a)"
      />
      <path
        d="M7.173 10.296l13.986 12.026 8.45-7.051"
        stroke="#635B52"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.248 12.014c2.572 0 4.657-2.305 4.657-5.148 0-2.843-2.085-5.148-4.657-5.148S33.59 4.023 33.59 6.866c0 2.843 2.085 5.148 4.657 5.148z"
        fill="#F8BD61"
      />
      <path
        d="M38.253 13.732a5.8 5.8 0 01-3.451-1.157c-1.021-.754-1.818-1.827-2.288-3.081a7.54 7.54 0 01-.353-3.967 7.117 7.117 0 011.7-3.516c.868-.96 1.975-1.614 3.18-1.88a5.663 5.663 0 013.589.392c1.134.52 2.105 1.4 2.787 2.529a7.391 7.391 0 011.047 3.814c-.001 1.82-.656 3.566-1.82 4.854-1.165 1.287-2.744 2.01-4.391 2.012zm0-10.296a2.901 2.901 0 00-1.728.576c-.512.377-.911.913-1.147 1.541a3.774 3.774 0 00-.18 1.986c.12.666.416 1.279.85 1.76a3.03 3.03 0 001.592.942 2.834 2.834 0 001.796-.195c.568-.26 1.054-.7 1.396-1.265.341-.565.524-1.23.524-1.91 0-.91-.327-1.783-.909-2.427-.582-.644-1.37-1.007-2.194-1.008z"
        fill="#F8BD61"
      />
    </svg>
  );
}

export default SvgComponent;

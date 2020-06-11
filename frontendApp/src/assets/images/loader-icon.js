import React from "react";

function LoaderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ margin: "auto", background: "#fff" }}
      width="200"
      height="200"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <defs>
        <linearGradient
          id="ldio-a2cl3gr9aeu-gradient"
          x1="0%"
          x2="0%"
          y1="0%"
          y2="100%"
        >
          <stop offset="10%" stopOpacity="0" />
          <stop offset="100%" stopColor="#fff" />
        </linearGradient>
        <mask
          id="ldio-a2cl3gr9aeu-mask"
          width="100"
          height="100"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="url(#ldio-a2cl3gr9aeu-gradient)"
            d="M22 8H78V62H22z"
          />
        </mask>
        <path
          id="ldio-a2cl3gr9aeu-steam"
          fill="red"
          stroke="#f8b26a"
          strokeLinecap="round"
          strokeWidth="6"
          d="M0-4c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9h0c-2.1 2.6-2.1 6.4 0 9h0c2.1 2.6 2.1 6.4 0 9"
        />
      </defs>
      <g mask="url(#ldio-a2cl3gr9aeu-mask)">
        <use x="29" y="1.538" xlinkHref="#ldio-a2cl3gr9aeu-steam">
          <animate
            attributeName="y"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="4;-14"
          />
        </use>
        <use x="47" y="-15.962" xlinkHref="#ldio-a2cl3gr9aeu-steam">
          <animate
            attributeName="y"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="0;-18"
          />
        </use>
        <use x="64" y="-21.462" xlinkHref="#ldio-a2cl3gr9aeu-steam">
          <animate
            attributeName="y"
            begin="-0.3333333333333333s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="-4;-22"
          />
        </use>
      </g>
      <path
        fill="#f8b26a"
        d="M81.2 52.5H76V49c0-1.6-1.3-3-3-3H20c-1.6 0-3 1.3-3 3v11.6C17 71.3 25.7 80 36.5 80h20.1c7.1 0 13.3-3.8 16.7-9.5h8.3c5.2 0 9.3-4.4 9-9.6-.4-4.8-4.6-8.4-9.4-8.4zm.3 15h-6.8c.8-2.2 1.3-4.5 1.3-7v-5h5.5c3.3 0 6 2.7 6 6s-2.7 6-6 6z"
      />
      <path
        fill="#d1d1d1"
        d="M78.8 88H19.2c-1.1 0-2-.9-2-2s.9-2 2-2h59.5c1.1 0 2 .9 2 2s-.8 2-1.9 2z"
      />
    </svg>
  );
}

export default LoaderIcon;

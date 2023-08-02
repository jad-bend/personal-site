"use client";

import useMousePosition from "./useMousePosition";

const Cursor = () => {
  // 1.
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        style={{
          left: `${x}px`,
          top: `${y}px`,
          position: "fixed",
          zIndex: 999,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="43"
          viewBox="0 0 38 43"
          fill="none"
        >
          <g filter="url(#filter0_d_27_2)">
            <path
              d="M8 7.6828C8 6.26341 9.64379 5.48394 10.7345 6.38616L29.1345 21.607C30.3454 22.6087 29.6404 24.5833 28.0718 24.5833H18.7233C17.9953 24.5833 17.3033 24.9011 16.8269 25.4542L10.936 32.2943C9.92299 33.4706 8 32.7508 8 31.1953L8 7.6828Z"
              fill="#6372FF"
            />
            <path
              d="M11.2852 5.72042C9.62505 4.34714 7.136 5.54032 7.136 7.6828L7.136 31.1953C7.136 33.5431 10.0491 34.6482 11.5907 32.8581L17.4816 26.018C17.7943 25.6549 18.2476 25.4473 18.7233 25.4473H28.0718C30.4589 25.4473 31.5131 22.4534 29.6852 20.9413L11.2852 5.72042Z"
              stroke="white"
              stroke-width="1.728"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_27_2"
              x="0.512005"
              y="0.811182"
              width="36.7245"
              height="41.8644"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2.304" />
              <feGaussianBlur stdDeviation="2.88" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_27_2"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_27_2"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Cursor;

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
          width="68"
          height="78"
          viewBox="0 0 68 78"
          fill="none"
        >
          <g filter="url(#filter0_d_10_14)">
            <path
              d="M15 14.9215C15 12.4573 17.8538 11.1041 19.7473 12.6704L51.6918 39.0956C53.7941 40.8346 52.5701 44.2627 49.8469 44.2626H33.6169C32.353 44.2626 31.1515 44.8144 30.3246 45.7746L20.0973 57.6498C18.3385 59.692 15 58.4424 15 55.7418L15 14.9215Z"
              fill="#3B5661"
            />
            <path
              d="M21.3408 10.7441C17.7996 7.81471 12.5 10.365 12.5 14.9215L12.5 55.7418C12.5 60.7348 18.7034 63.0993 21.9916 59.2813L32.2189 47.4061C32.5724 46.9956 33.083 46.7626 33.6169 46.7626H49.8469C54.9386 46.7626 57.1729 40.3851 53.2853 37.1692L21.3408 10.7441Z"
              stroke="white"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_10_14"
              x="0"
              y="0.986053"
              width="67.7598"
              height="76.693"
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
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_10_14"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_10_14"
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

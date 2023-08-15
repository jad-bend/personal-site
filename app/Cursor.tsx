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
          zIndex: -999,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="316"
          height="315"
          viewBox="0 0 316 315"
          fill="none"
        >
          <g filter="url(#filter0_f_143_2)">
            <ellipse cx="158" cy="157.5" rx="58" ry="57.5" fill="#A28FF3" />
          </g>
          <defs>
            <filter
              id="filter0_f_143_2"
              x="0"
              y="0"
              width="316"
              height="315"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50"
                result="effect1_foregroundBlur_143_2"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Cursor;

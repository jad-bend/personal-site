import Cursor from "./Cursor";

function BackGradient() {
  return (
    <>
      <div className="blur-[200px] absolute z-0">
        <div className="left-[225.39px] top-[-104px] w-[521.739px] h-[310px] flex-shrink-0 rounded-[521.739px] bg-blue-400 absolute" />
        <div className="left-[549.91px] top-[29px] w-[521.739px] h-[310px] flex-shrink-0 rounded-[521.739px] bg-red-400 absolute" />
        <div className="left-[810.78px] top-[51px] w-[521.739px] h-[310px] flex-shrink-0 rounded-[521.739px] bg-purple-400 absolute" />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="496"
          viewBox="0 0 1440 496"
          fill="none"
        >
          <path
            d="M0 0H246.783C1007.48 647.5 974.02 95.6876 1440 157V472C1440 472 828.522 559 822.783 400.5C817.043 242 613.044 447 363.131 314.5C113.218 182 0 0 0 0Z"
            fill="#BA63FF"
          />
        </svg>
      </div>
    </>
  );
}

function NameGreeting() {
  return (
    <>
      <div className="text-white z-1 absolute">
        <div className="font-black text-[45px] ">Hello! I'm Jad Bendarkawi</div>
        <div className="font-[200] text-[25px] ">
          software engineer + ux + product
        </div>
        <div className="font-[200] text-[25px] w-[623px]">
          i'm a senior at Princeton University studying electrical & computer
          engineering with minors in technology & society and robotics.{" "}
        </div>
      </div>
    </>
  );
}

function CursorYes() {
  return (
    <div className="fixed">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="74"
        viewBox="0 0 64 74"
        fill="none"
      >
        <g filter="url(#filter0_d_27_2)">
          <path
            d="M13 12.9215C13 10.4573 15.8538 9.10407 17.7473 10.6704L49.6918 37.0956C51.7941 38.8346 50.5701 42.2627 47.8469 42.2626H31.6169C30.353 42.2626 29.1515 42.8144 28.3246 43.7746L18.0973 55.6498C16.3385 57.692 13 56.4424 13 53.7418L13 12.9215Z"
            fill="white"
          />
          <path
            d="M18.7034 9.51462C15.8213 7.13045 11.5 9.20194 11.5 12.9215L11.5 53.7418C11.5 57.8178 16.5574 59.7364 19.2339 56.6287L29.4611 44.7535C30.004 44.1231 30.791 43.7626 31.6169 43.7626H47.8469C51.9912 43.7626 53.8214 38.5649 50.6479 35.9398L18.7034 9.51462Z"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_27_2"
            x="0"
            y="0.991638"
            width="63.7579"
            height="72.6813"
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
  );
}
export default function Home() {
  return (
    <>
      <BackGradient /> <NameGreeting /> <Cursor />
    </>
  );
}

"use client";

import { MouseEventHandler, useRef } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import Footer from "./Footer";

function Aura() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="absolute z-[-999] opacity-90 "
      >
        <svg
          width="1440"
          height="1118"
          viewBox="0 0 1440 1118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-screen"
        >
          <g opacity="0.9" filter="url(#filter0_f_182_339)">
            <path
              d="M0 127.796H246.783C1007.48 898.546 974.02 241.698 1440 314.681V689.64C1440 689.64 828.522 793.2 822.782 604.53C817.043 415.86 613.044 659.881 363.13 502.16C113.218 344.439 0 127.796 0 127.796Z"
              fill="#C798E0"
            />
            <ellipse
              cx="486.261"
              cy="188.504"
              rx="260.87"
              ry="184.504"
              fill="#63B4FF"
            />
            <ellipse
              cx="1071.65"
              cy="373.008"
              rx="260.87"
              ry="184.504"
              fill="#C3DFF6"
            />
            <ellipse
              cx="810.783"
              cy="346.82"
              rx="260.87"
              ry="184.504"
              fill="#AFD7DA"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_182_339"
              x="-400"
              y="-396"
              width="2240"
              height="1514"
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
                stdDeviation="200"
                result="effect1_foregroundBlur_182_339"
              />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </>
  );
}
function Icon() {
  return (
    <>
      <div className="lg:scale-100">
        <svg
          width="161"
          height="161"
          viewBox="0 0 161 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_158_55)">
            <path
              d="M136.039 0.078125H24.0391C10.7842 0.078125 0.0390625 10.8233 0.0390625 24.0781V136.078C0.0390625 149.333 10.7842 160.078 24.0391 160.078H136.039C149.294 160.078 160.039 149.333 160.039 136.078V24.0781C160.039 10.8233 149.294 0.078125 136.039 0.078125Z"
              fill="#608F81"
            />
            <path
              d="M24.0166 79.6417H39.6984V124.756C39.6984 128.581 38.8935 131.573 37.2836 133.732C35.6927 135.892 33.4579 137.416 30.5791 138.307C27.7003 139.196 24.3386 139.642 20.4939 139.642C19.9257 139.642 19.4048 139.632 18.9314 139.613C18.4389 139.594 17.8991 139.566 17.312 139.528V127.937C17.6908 127.975 18.0223 128.004 18.3063 128.022C18.5715 128.041 18.8461 128.051 19.1302 128.051C21.0052 128.051 22.2836 127.757 22.9655 127.17C23.6662 126.602 24.0166 125.684 24.0166 124.414V79.6417ZM31.8575 75.0962C29.7363 75.0962 27.9181 74.3955 26.4029 72.994C24.8878 71.5925 24.1302 69.9069 24.1302 67.9372C24.1302 65.9674 24.8878 64.2818 26.4029 62.8803C27.9181 61.4788 29.7363 60.7781 31.8575 60.7781C33.9976 60.7781 35.8158 61.4788 37.312 62.8803C38.8271 64.2818 39.5847 65.9674 39.5847 67.9372C39.5847 69.9069 38.8271 71.5925 37.312 72.994C35.8158 74.3955 33.9976 75.0962 31.8575 75.0962ZM47.4611 123.278V65.0962H63.143V87.2557H63.3703C63.9384 85.7781 64.7718 84.4237 65.8703 83.1925C66.9687 81.9429 68.3324 80.9485 69.9611 80.2101C71.5899 79.4523 73.4839 79.0735 75.643 79.0735C78.5218 79.0735 81.2585 79.8406 83.8529 81.3749C86.4665 82.9085 88.5881 85.3237 90.2169 88.6189C91.8649 91.9141 92.6881 96.1949 92.6881 101.46C92.6881 106.498 91.9025 110.674 90.3305 113.988C88.7777 117.303 86.6945 119.774 84.0801 121.403C81.4857 123.032 78.6354 123.846 75.5294 123.846C73.4839 123.846 71.6563 123.515 70.0464 122.852C68.4555 122.17 67.0919 121.252 65.9555 120.096C64.8381 118.922 63.9763 117.596 63.3703 116.119H63.0294V123.278H47.4611ZM62.8021 101.46C62.8021 103.581 63.0767 105.418 63.6259 106.971C64.1941 108.505 64.9896 109.699 66.0123 110.551C67.0539 111.384 68.2945 111.8 69.7339 111.8C71.1733 111.8 72.3949 111.393 73.3987 110.579C74.4214 109.746 75.1979 108.562 75.7282 107.028C76.2774 105.475 76.5521 103.619 76.5521 101.46C76.5521 99.3005 76.2774 97.4541 75.7282 95.9205C75.1979 94.3669 74.4214 93.1837 73.3987 92.3693C72.3949 91.5357 71.1733 91.1189 69.7339 91.1189C68.2945 91.1189 67.0539 91.5357 66.0123 92.3693C64.9896 93.1837 64.1941 94.3669 63.6259 95.9205C63.0767 97.4541 62.8021 99.3005 62.8021 101.46ZM107.774 124.187C105.577 124.187 103.692 123.42 102.12 121.886C100.567 120.333 99.8001 118.448 99.8193 116.232C99.8001 114.073 100.567 112.227 102.12 110.692C103.692 109.159 105.577 108.392 107.774 108.392C109.857 108.392 111.695 109.159 113.285 110.692C114.895 112.227 115.709 114.073 115.728 116.232C115.709 117.71 115.321 119.055 114.563 120.267C113.825 121.46 112.859 122.416 111.666 123.136C110.473 123.836 109.175 124.187 107.774 124.187Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_158_55">
              <rect
                width="160"
                height="160"
                fill="white"
                transform="translate(0.0390625 0.078125)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
}

function LittleStar() {
  return (
    <>
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_182_511)">
          <path
            d="M13.1403 1.98441C13.7714 -0.173515 16.8283 -0.173515 17.4594 1.98441L19.638 9.4339C19.8534 10.1705 20.4294 10.7465 21.166 10.9619L28.6155 13.1405C30.7734 13.7715 30.7734 16.8285 28.6155 17.4596L21.166 19.6381C20.4294 19.8536 19.8534 20.4296 19.638 21.1661L17.4594 28.6156C16.8283 30.7735 13.7714 30.7735 13.1403 28.6156L10.9617 21.1661C10.7463 20.4296 10.1703 19.8536 9.4337 19.6381L1.98418 17.4596C-0.173761 16.8285 -0.173761 13.7715 1.98418 13.1405L9.4337 10.9619C10.1703 10.7465 10.7463 10.1705 10.9617 9.4339L13.1403 1.98441Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_182_511">
            <rect width="30.6001" height="30.6" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

function BigStar() {
  return (
    <>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.2875 3.21491C22.3099 -0.280945 27.2621 -0.280945 28.2845 3.21491L31.8138 15.2831C32.1627 16.4763 33.0959 17.4095 34.2891 17.7584L46.3573 21.2877C49.8531 22.3101 49.8531 27.2623 46.3573 28.2847L34.2891 31.814C33.0959 32.163 32.1627 33.0961 31.8138 34.2893L28.2845 46.3575C27.2621 49.8534 22.3099 49.8534 21.2875 46.3575L17.7582 34.2893C17.4092 33.0961 16.4761 32.163 15.2829 31.814L3.21466 28.2847C-0.281189 27.2623 -0.281189 22.3101 3.21466 21.2877L15.2829 17.7584C16.4761 17.4095 17.4092 16.4763 17.7582 15.2831L21.2875 3.21491Z"
          fill="white"
        />
      </svg>
    </>
  );
}

function Exclaim() {
  return (
    <>
      <svg
        width="41"
        height="43"
        viewBox="0 0 41 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 33.4082L21.8044 40.2196"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path
          d="M14.8066 16.3103L28.9488 30.4524"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path
          d="M34 3L38.3308 22.5255"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
}

function IconFrame() {
  return (
    <>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.25 }}
          className="z-10 absolute top-[-30px] left-[-40px]"
        >
          <Exclaim />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.25 }}
          className=" z-10 absolute left-[-40px] bottom-[-20px]"
        >
          <LittleStar />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="z-9"
        >
          <Icon />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.75, delay: 0.25 }}
          className=" z-10 absolute top-[-20px] right-[-50px]"
        >
          <BigStar />
        </motion.div>
      </div>
    </>
  );
}

function NameGreeting() {
  return (
    <>
      <div className="text-[#f8f3f1] absolute items-center">
        <div className="font-black text-center text-[45px] text-[#f8f3f1] ">
          Hello! I'm Jad Bendarkawi
        </div>
        <div className="text-[25px] text-center font-[200]">
          software engineer + ux + product
        </div>
        <div className="font-[200] text-[25px] lg:w-[963px] text-center pt-[22px] text-[#f8f3f1]">
          i’m a senior at{" "}
          <b className="font-[600] text-[#f8f3f1]">Princeton University</b>{" "}
          studying
          <b className="font-[600] text-[#f8f3f1]">
            {" "}
            electrical & computer engineering
          </b>{" "}
          with minors in{" "}
          <b className="font-[600] text-[#f8f3f1]"> technology & society</b> and
          <b className="font-[600] text-[#f8f3f1]"> robotics</b>. i’m excited
          about building valuable digital experiences that bring people
          together.{" "}
        </div>
        <div className="justify-center flex mt-[25px]">
          <a
            className="group bg-transparent h-[50px] w-[50px] rounded-[50px] mr-3 justify-center flex pt-[12px] hover:bg-white"
            href="https://www.linkedin.com/in/jadbendarkawi/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-[#f8f3f1]  group-hover:fill-[#161616]"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            className="group bg-transparent h-[50px] w-[50px] rounded-[50px] mr-3 justify-center flex pt-[8px]  hover:bg-white"
            href="https://github.com/jad-bend"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-[#f8f3f1]  group-hover:fill-[#161616]"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            className="group bg-transparent h-[50px] w-[50px] rounded-[50px] mr-3 justify-center flex pt-[10px] hover:bg-white"
            href="mailto:jadb@princeton.edu"
          >
            <svg
              viewBox="0 0 8 6"
              className="h-7 w-7 rounded-[5px] fill-[#f8f3f1]  group-hover:fill-[#161616]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}

/*
function HomeRender() {
  return (
    <div className="z-0 absolute">
      <Spline scene="https://prod.spline.design/TrFWVXHApQY9csqU/scene.splinecode" />
    </div>
  );
}
*/

interface SectionHeaderProps {
  title: string;
}

function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <>
      <div className="text-[#f8f3f1] text-[30px] font-black lowercase">
        {title}
      </div>
    </>
  );
}

interface SkillChipProps {
  text: string;
}
function SkillChip({ text }: SkillChipProps) {
  return (
    <>
      <div
        className="justify-center align-middle rounded-[20px] text-[#f8f3f1] border-[1px] border-[#f8f3f1] pr-[14px] pl-[14px] pt-[5px] pb-[5px] uppercase transition ease-in-out duration-200 group-hover:bg-[#f8f3f1] group-hover:text-black group-hover:border-black"
        style={{ width: "fit-content" }}
      >
        {text}
      </div>
    </>
  );
}

interface ProjectCardProps {
  title: string;
  description?: string;
  onNavigate?: MouseEventHandler<HTMLDivElement>;
  bgHoverColor?: string;
  skills?: string[];
  image?: string;
}

function ProjectCard({
  title,
  description,
  bgHoverColor,
  skills,
  image,
}: ProjectCardProps) {
  const projectCardStyles = `scale-95 hover:scale-100 group bg-[#242424] w-[550px] h-[616px] rounded-[50px] transition-all duration-200 ease-in no-underline hover:cursor-pointer hover:w-100px ${bgHoverColor} relative`;
  const pageNavName = title?.replaceAll(" ", "").toLowerCase();
  return (
    <>
      <Link href={pageNavName}>
        <div className={projectCardStyles}>
          <div className="pl-7 scale">
            <div
              className="text-[#f8f3f1] font-black text-[30px] mb-[10px] pt-[40px] bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
              style={{ width: "fit-content" }}
            >
              {title}
            </div>
          </div>

          <div className="text-[#f8f3f1] text-[15px] pl-7 pr-7 pb-[14px] group-hover:text-black ">
            {description}
          </div>

          <div className="grid grid-flow-col justify-center gap-2">
            {skills?.map(function (skill) {
              return <SkillChip text={skill} />;
            })}
          </div>

          <div className="bottom-0 right-0 absolute opacity-50 group-hover:opacity-100 ">
            <img src={image} width="393" height="398" />
          </div>
        </div>
      </Link>
    </>
  );
}

export default function Home() {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const handleHomeClick = () => {
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const handleProjectsClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const creativeRef = useRef<null | HTMLDivElement>(null);
  const handleCreativeClick = () => {
    creativeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Aura />
      <div ref={homeRef} className="flex justify-center">
        <nav
          className="bg-[#ffffff0a] fixed sm:grid sm:grid-rows-1 sm:items-center sm:justify-items-stretch sm:h-12 top-0 w-screen z-10 backdrop-blur-lg"
          data-headlessui-state=""
        >
          <div>
            <div className="relative justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  className="inline-flex items-center justify-center rounded-md p-2 mt-8 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  id="headlessui-disclosure-button-:Rl6:"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="block h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:items-center sm:justify-between">
                <div className=" sm:ml-2 sm:block">
                  <button
                    onClick={handleHomeClick}
                    className="hidden sm:ml-2 sm:block bg-[#618F81] text-[#f8f3f1]  rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    home
                  </button>
                </div>
                <div className="hidden justify-self-end sm:mr-2 sm:block">
                  <button
                    onClick={handleProjectsClick}
                    className="text-[#f8f3f1] hover:bg-[#618F81]  rounded-md px-3 py-2 text-sm font-medium"
                  >
                    projects
                  </button>
                  <button
                    onClick={handleCreativeClick}
                    className="text-[#f8f3f1] hover:bg-[#618F81]  rounded-md px-3 py-2 text-sm font-medium"
                  >
                    creative
                  </button>
                  <button className="text-[#f8f3f1] hover:bg-[#618F81] rounded-md px-3 py-2 text-sm font-medium">
                    resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex items-center justify-center pt-[145px]">
        <IconFrame />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.75, delay: 0.5 }}
        className="flex items-center justify-center lg:pt-[200px] md:pt-[200px] sm:pt-[200px] pt-[300px] "
      >
        <NameGreeting />
      </motion.div>

      <div
        ref={projectsRef}
        className="pt-[290px] pb-[50px] justify-center flex "
      >
        <SectionHeader title="featured projects" />
      </div>

      <div className="flex items-center justify-center">
        <div className="grid gap-[40px] lg:grid-cols-2 md:grid-cols-1 ">
          <ProjectCard
            title={"Microsoft Loop"}
            description={
              "digital expressions + homepage experience for the Microsoft Loop app, designed to enable live, collaborative productivity"
            }
            bgHoverColor={"hover:bg-[#9B79E2]"}
            skills={["react", "typescript", "ux design", "html/css"]}
            image={"/loopcard.png"}
          />
          <ProjectCard
            title={"TigerFocus"}
            description={
              "a pomodoro inspired self-study tool that enables Princeton students to track tasks, time sessions, and manage courses all in one place"
            }
            bgHoverColor={"hover:bg-[#E29C79]"}
            skills={["python flask", "javascript", "html/css", "figma"]}
            image={"/tigercard.png"}
          />
        </div>
      </div>

      <div
        ref={creativeRef}
        className="pt-[100px] pb-[20px] justify-center flex "
      >
        <SectionHeader title="" />
      </div>

      <Footer />
    </>
  );
}

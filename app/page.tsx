"use client";

import { MouseEventHandler, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { useRouter } from "next/router";
import Link from "next/link";
import Cursor from "./Cursor";
import icon from "./icon.png";

function Aura() {
  return (
    <>
      <div className="absolute z-[-999] opacity-90">
        <svg
          width="1440"
          height="1118"
          viewBox="0 0 1440 1118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      </div>
    </>
  );
}
function Icon() {
  return (
    <>
      <div className="lg:scale-100">
        <svg
          width="253"
          height="213"
          viewBox="0 0 253 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_0_1)">
            <path
              d="M179.039 33.0781H67.0391C53.7842 33.0781 43.0391 43.8233 43.0391 57.0781V169.078C43.0391 182.333 53.7842 193.078 67.0391 193.078H179.039C192.294 193.078 203.039 182.333 203.039 169.078V57.0781C203.039 43.8233 192.294 33.0781 179.039 33.0781Z"
              fill="#618F81"
            />
            <path
              d="M67.0166 112.642H82.6984V157.756C82.6984 161.581 81.8935 164.573 80.2836 166.732C78.6927 168.892 76.4579 170.416 73.5791 171.307C70.7003 172.196 67.3386 172.642 63.4939 172.642C62.9257 172.642 62.4048 172.632 61.9314 172.613C61.4389 172.594 60.8991 172.566 60.312 172.528V160.937C60.6908 160.975 61.0223 161.004 61.3063 161.022C61.5715 161.041 61.8461 161.051 62.1302 161.051C64.0052 161.051 65.2836 160.757 65.9655 160.17C66.6662 159.602 67.0166 158.684 67.0166 157.414V112.642ZM74.8575 108.096C72.7363 108.096 70.9181 107.396 69.4029 105.994C67.8878 104.592 67.1302 102.907 67.1302 100.937C67.1302 98.9674 67.8878 97.2818 69.4029 95.8803C70.9181 94.4788 72.7363 93.7781 74.8575 93.7781C76.9976 93.7781 78.8158 94.4788 80.312 95.8803C81.8271 97.2818 82.5847 98.9674 82.5847 100.937C82.5847 102.907 81.8271 104.592 80.312 105.994C78.8158 107.396 76.9976 108.096 74.8575 108.096ZM90.4611 156.278V98.0962H106.143V120.256H106.37C106.938 118.778 107.772 117.424 108.87 116.192C109.969 114.943 111.332 113.948 112.961 113.21C114.59 112.452 116.484 112.074 118.643 112.074C121.522 112.074 124.258 112.841 126.853 114.375C129.466 115.908 131.588 118.324 133.217 121.619C134.865 124.914 135.688 129.195 135.688 134.46C135.688 139.498 134.902 143.674 133.33 146.988C131.778 150.303 129.694 152.774 127.08 154.403C124.486 156.032 121.635 156.846 118.529 156.846C116.484 156.846 114.656 156.515 113.046 155.852C111.455 155.17 110.092 154.252 108.955 153.096C107.838 151.922 106.976 150.596 106.37 149.119H106.029V156.278H90.4611ZM105.802 134.46C105.802 136.581 106.077 138.418 106.626 139.971C107.194 141.505 107.99 142.699 109.012 143.551C110.054 144.384 111.294 144.8 112.734 144.8C114.173 144.8 115.395 144.393 116.399 143.579C117.421 142.746 118.198 141.562 118.728 140.028C119.277 138.475 119.552 136.619 119.552 134.46C119.552 132.3 119.277 130.454 118.728 128.92C118.198 127.367 117.421 126.184 116.399 125.369C115.395 124.536 114.173 124.119 112.734 124.119C111.294 124.119 110.054 124.536 109.012 125.369C107.99 126.184 107.194 127.367 106.626 128.92C106.077 130.454 105.802 132.3 105.802 134.46ZM150.774 157.187C148.577 157.187 146.692 156.42 145.12 154.886C143.567 153.333 142.8 151.448 142.819 149.232C142.8 147.073 143.567 145.227 145.12 143.692C146.692 142.159 148.577 141.392 150.774 141.392C152.857 141.392 154.695 142.159 156.285 143.692C157.895 145.227 158.709 147.073 158.728 149.232C158.709 150.71 158.321 152.055 157.563 153.267C156.825 154.46 155.859 155.416 154.666 156.136C153.473 156.836 152.175 157.187 150.774 157.187Z"
              fill="white"
            />
          </g>
          <g clip-path="url(#clip1_0_1)">
            <path
              d="M20.1403 183.984C20.7714 181.826 23.8283 181.826 24.4594 183.984L26.638 191.434C26.8534 192.17 27.4294 192.746 28.166 192.962L35.6155 195.14C37.7734 195.772 37.7734 198.828 35.6155 199.46L28.166 201.638C27.4294 201.854 26.8534 202.43 26.638 203.166L24.4594 210.616C23.8283 212.774 20.7714 212.774 20.1403 210.616L17.9617 203.166C17.7463 202.43 17.1703 201.854 16.4337 201.638L8.98418 199.46C6.82624 198.828 6.82624 195.772 8.98418 195.14L16.4337 192.962C17.1703 192.746 17.7463 192.17 17.9617 191.434L20.1403 183.984Z"
              fill="white"
            />
          </g>
          <path
            d="M224.288 9.21491C225.31 5.71905 230.262 5.71905 231.284 9.21491L234.814 21.2831C235.163 22.4763 236.096 23.4095 237.289 23.7584L249.357 27.2877C252.853 28.3101 252.853 33.2623 249.357 34.2847L237.289 37.814C236.096 38.163 235.163 39.0961 234.814 40.2893L231.284 52.3575C230.262 55.8534 225.31 55.8534 224.288 52.3575L220.758 40.2893C220.409 39.0961 219.476 38.163 218.283 37.814L206.215 34.2847C202.719 33.2623 202.719 28.3101 206.215 27.2877L218.283 23.7584C219.476 23.4095 220.409 22.4763 220.758 21.2831L224.288 9.21491Z"
            fill="white"
          />
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
          <defs>
            <clipPath id="clip0_0_1">
              <rect
                width="160"
                height="160"
                fill="white"
                transform="translate(43.0391 33.0781)"
              />
            </clipPath>
            <clipPath id="clip1_0_1">
              <rect
                width="30.6001"
                height="30.6"
                fill="white"
                transform="translate(7 182)"
              />
            </clipPath>
          </defs>
        </svg>
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
            className="group bg-transparent h-[50px] w-[50px] rounded-[50px] mr-3 justify-center flex pt-[12px] transition ease-in-out duration-300 hover:bg-white"
            href="https://www.linkedin.com/in/jadbendarkawi/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-[#f8f3f1] transition ease-in-out duration-300 group-hover:fill-[#161616]"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            className="group bg-transparent h-[50px] w-[50px] rounded-[50px] mr-3 justify-center flex pt-[8px] transition ease-in-out duration-300 hover:bg-white"
            href="https://github.com/jad-bend"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-[#f8f3f1] transition ease-in-out duration-300 group-hover:fill-[#161616]"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            className="group bg-transparent h-[50px] w-[50px] rounded-[50px] mr-3 justify-center flex pt-[10px] transition ease-in-out duration-300 hover:bg-white"
            href="mailto:jadb@princeton.edu"
          >
            <svg
              viewBox="0 0 8 6"
              className="h-7 w-7 rounded-[5px] fill-[#f8f3f1] transition ease-in-out duration-300 group-hover:fill-[#161616]"
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

function SocialButtons() {
  return (
    <div className="justify-left flex">
      <a
        className="group h-[50px] w-[50px] rounded-[50px] mr-[20px] justify-center flex pt-[12px] transition ease-in-out duration-300 bg-[#161616]"
        href="https://www.linkedin.com/in/jadbendarkawi/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 fill-[#f8f3f1] transition ease-in-out duration-300"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      </a>
      <a
        className="group h-[50px] w-[50px] rounded-[50px] mr-[20px] justify-center flex pt-[8px] transition ease-in-out duration-300 bg-[#161616]"
        href="https://github.com/jad-bend"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 transition ease-in-out duration-300 fill-[#f8f3f1]"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      <a
        className="group h-[50px] w-[50px] rounded-[50px] mr-3 justify-center flex pt-[10px] transition ease-in-out duration-300 bg-[#161616]"
        href="mailto:jadb@princeton.edu"
      >
        <svg
          viewBox="0 0 8 6"
          className="h-7 w-7 rounded-[5px] transition ease-in-out duration-300 fill-[#f8f3f1]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
        </svg>
      </a>
    </div>
  );
}

function HomeRender() {
  return (
    <div className="z-0 absolute">
      <Spline scene="https://prod.spline.design/TrFWVXHApQY9csqU/scene.splinecode" />
    </div>
  );
}

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
}

function ProjectCard({
  title,
  description,
  bgHoverColor,
  skills,
}: ProjectCardProps) {
  const projectCardStyles = `group bg-[#242424] w-[550px] h-[209px] rounded-[10px] transition-all duration-200 ease-in no-underline hover:cursor-pointer hover:w-100px ${bgHoverColor} `;
  const pageNavName = title?.replaceAll(" ", "").toLowerCase();
  return (
    <>
      <Link href={pageNavName}>
        <div className={projectCardStyles}>
          <div className="pl-7">
            <div
              className="text-[#f8f3f1] font-black text-[30px] mb-[5px] pt-7 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
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
        </div>
      </Link>
    </>
  );
}

export function Footer() {
  return (
    <footer className="  m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <img src="icon.png" height="50px" width="50px"></img>
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/in/jadbendarkawi/"
                className="mr-4 hover:underline md:mr-6"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jad-bend"
                className="mr-4 hover:underline md:mr-6 "
              >
                github
              </a>
            </li>
            <li>
              <a href="mailto:jadb@princeton.edu" className="hover:underline">
                email
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://jadbendarkawi.com/" className="hover:underline">
            jad bendarkawi
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
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
        <Icon />
      </div>

      <div className="flex items-center justify-center lg:pt-[200px] md:pt-[200px] sm:pt-[200px] pt-[300px] ">
        <NameGreeting />
      </div>

      <div
        ref={projectsRef}
        className="pt-[290px] pb-[20px] justify-center flex "
      >
        <SectionHeader title="featured projects" />
      </div>

      <div className="flex items-center justify-center">
        <div className="grid gap-[10px] lg:grid-cols-2 md:grid-cols-1 ">
          <ProjectCard
            title={"Microsoft Loop"}
            description={
              "digital expressions + homepage experience for the Microsoft Loop app, designed to enable live, collaborative productivity"
            }
            bgHoverColor={"hover:bg-violet-400"}
            skills={["react", "typescript", "ux design", "html/css"]}
          />
          <ProjectCard
            title={"TigerFocus"}
            description={
              "a pomodoro inspired self-study tool that enables Princeton students to track tasks, time sessions, and manage courses all in one place"
            }
            bgHoverColor={"hover:bg-orange-400"}
            skills={["python flask", "javascript", "html/css", "figma"]}
          />
          <ProjectCard
            title={"halalify"}
            description={
              "a lightweight chrome extension built to help Muslims make informed online grocery shopping decisions"
            }
            bgHoverColor={`hover:bg-emerald-400`}
            skills={["figma", "ux design", "product development"]}
          />
          <ProjectCard
            title={"Figure-8-Robot"}
            description={
              "a self-driving, speed-controlled robot that can complete figure 8's (final project for ECE302: Robotics and Autonomous Systems Lab)"
            }
            bgHoverColor={`hover:bg-blue-400`}
            skills={["C", "computer vision", "circuit design", "PID ctrl"]}
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

"use client";

import { MouseEventHandler, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { useRouter } from "next/router";
import Link from "next/link";
import Cursor from "./Cursor";
import icon from "./icon.png";

function Icon() {
  return (
    <>
      <div className="lg:scale-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          viewBox="0 0 160 160"
          fill="none"
        >
          <g clip-path="url(#clip0_158_55)">
            <path
              d="M136 0H24C10.7452 0 0 10.7452 0 24V136C0 149.255 10.7452 160 24 160H136C149.255 160 160 149.255 160 136V24C160 10.7452 149.255 0 136 0Z"
              fill="#618F81"
            />
            <path
              d="M23.9775 79.5635H39.6593V124.678C39.6593 128.503 38.8544 131.495 37.2445 133.654C35.6537 135.814 33.4188 137.338 30.54 138.229C27.6612 139.118 24.2995 139.564 20.4548 139.564C19.8866 139.564 19.3657 139.554 18.8923 139.535C18.3998 139.516 17.8601 139.488 17.2729 139.45V127.859C17.6517 127.897 17.9832 127.926 18.2673 127.944C18.5324 127.963 18.807 127.973 19.0911 127.973C20.9661 127.973 22.2445 127.679 22.9264 127.092C23.6271 126.524 23.9775 125.606 23.9775 124.336V79.5635ZM31.8184 75.0181C29.6972 75.0181 27.879 74.3174 26.3638 72.9159C24.8487 71.5143 24.0911 69.8287 24.0911 67.8591C24.0911 65.8893 24.8487 64.2037 26.3638 62.8022C27.879 61.4007 29.6972 60.7 31.8184 60.7C33.9586 60.7 35.7767 61.4007 37.2729 62.8022C38.7881 64.2037 39.5457 65.8893 39.5457 67.8591C39.5457 69.8287 38.7881 71.5143 37.2729 72.9159C35.7767 74.3174 33.9586 75.0181 31.8184 75.0181ZM47.4221 123.2V65.0181H63.1039V87.1775H63.3312C63.8993 85.6999 64.7327 84.3455 65.8312 83.1143C66.9297 81.8647 68.2934 80.8704 69.9221 80.132C71.5509 79.3742 73.4449 78.9954 75.6039 78.9954C78.4827 78.9954 81.2194 79.7624 83.8138 81.2968C86.4274 82.8304 88.549 85.2456 90.1778 88.5408C91.8258 91.836 92.649 96.1167 92.649 101.382C92.649 106.42 91.8634 110.596 90.2914 113.91C88.7386 117.225 86.6554 119.696 84.041 121.325C81.4466 122.954 78.5963 123.768 75.4903 123.768C73.4449 123.768 71.6172 123.437 70.0073 122.774C68.4164 122.092 67.0528 121.174 65.9164 120.018C64.799 118.844 63.9373 117.518 63.3312 116.041H62.9903V123.2H47.4221ZM62.763 101.382C62.763 103.503 63.0377 105.34 63.5869 106.893C64.155 108.427 64.9506 109.621 65.9733 110.473C67.0149 111.306 68.2554 111.722 69.6949 111.722C71.1342 111.722 72.3558 111.315 73.3596 110.501C74.3823 109.668 75.1589 108.484 75.6892 106.95C76.2384 105.397 76.513 103.541 76.513 101.382C76.513 99.2223 76.2384 97.376 75.6892 95.8424C75.1589 94.2888 74.3823 93.1055 73.3596 92.2911C72.3558 91.4575 71.1342 91.0408 69.6949 91.0408C68.2554 91.0408 67.0149 91.4575 65.9733 92.2911C64.9506 93.1055 64.155 94.2888 63.5869 95.8424C63.0377 97.376 62.763 99.2223 62.763 101.382ZM107.735 124.109C105.538 124.109 103.653 123.342 102.081 121.808C100.528 120.255 99.761 118.37 99.7802 116.154C99.761 113.995 100.528 112.149 102.081 110.614C103.653 109.081 105.538 108.314 107.735 108.314C109.818 108.314 111.655 109.081 113.246 110.614C114.855 112.149 115.67 113.995 115.689 116.154C115.67 117.632 115.282 118.977 114.524 120.189C113.786 121.382 112.82 122.338 111.627 123.058C110.434 123.758 109.136 124.109 107.735 124.109Z"
              fill="#161616"
            />
          </g>
          <defs>
            <clipPath id="clip0_158_55">
              <rect width="160" height="160" fill="white" />
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
        <div className="font-black text-center text-[45px] text-[#618F81] ">
          Hello! I'm Jad Bendarkawi
        </div>
        <div className="text-[25px] text-center font-[200]">
          software engineer + ux + product
        </div>
        <div className="font-[200] text-[25px] lg:w-[963px] text-center pt-[22px] text-[#f8f3f1]">
          i’m a senior at{" "}
          <b className="font-[600] text-[#618F81]">Princeton University</b>{" "}
          studying
          <b className="font-[600] text-[#618F81]">
            {" "}
            electrical & computer engineering
          </b>{" "}
          with minors in{" "}
          <b className="font-[600] text-[#618F81]"> technology & society</b> and
          <b className="font-[600] text-[#618F81]"> robotics</b>. i’m excited
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
              className="text-[#f8f3f1] group-hover:text-[#161616] font-black text-[30px] mb-[5px] pt-7 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
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
            <img src="/icon.png" height="50px" width="50px"></img>
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
          <a href="https://flowbite.com/" className="hover:underline">
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
      <div ref={homeRef} className="flex justify-center">
        <nav
          className="bg-[#161616] fixed sm:grid sm:grid-rows-1 sm:items-center sm:justify-items-stretch sm:h-12 top-0 w-screen z-10"
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

      <div className="pt-[290px] pb-[20px] justify-center flex ">
        <SectionHeader title="featured projects" />
      </div>

      <div ref={projectsRef} className="flex items-center justify-center">
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

"use client";

import { useRef } from "react";
import Cursor from "./Cursor";
import Spline from "@splinetool/react-spline";

function Snail() {
  return (
    <>
      <div className="hover:animate-spin">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="138"
          height="143"
          viewBox="0 0 138 143"
          fill="none"
        >
          <path
            d="M47.1975 64.9834C37.6885 64.9834 26.8301 65.9101 17.828 62.2033C13.812 60.5497 6.84253 59.5251 6.84253 54.0427C6.84253 44.7582 12.5817 38.0961 19.3077 32.1613C28.9891 23.6189 42.9768 22.216 55.2685 26.2426C64.1446 29.1503 67.3749 36.0735 67.3749 44.8507C67.3749 61.1396 66.5678 77.3503 66.5678 93.6354C66.5678 101.896 67.5584 116.4 76.7462 119.463C85.5229 122.388 95.9549 122.508 105.129 122.287C114.824 122.054 122.176 112.797 128.625 106.549C135.603 99.7884 138.21 79.6632 133.736 70.5434C131.705 66.4022 126.048 61.9329 122.616 58.9749C116.872 54.023 109.09 49.822 101.452 49.6485C94.6485 49.4938 89.9352 48.8882 83.5618 52.4733C79.103 54.9814 76.0517 60.9023 73.4282 64.9834C69.4869 71.1142 69.6409 80.6043 70.7827 87.5821C71.7908 93.7425 73.2089 99.4375 78.2259 103.59C83.5427 107.99 91.321 107.37 97.8653 106.952C104.201 106.548 106.595 94.9455 106.878 90.1379C107.165 85.2645 103.711 82.1816 98.8518 81.9324C93.4946 81.6577 86.7453 79.1637 86.7453 86.775"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
          />
          <path
            d="M18.142 64.9833C18.142 71.0301 18.0546 77.9819 15.2723 83.5466C12.5676 88.956 8.34088 93.1575 6.21483 98.8815C2.27114 109.499 3.78896 120.041 11.6852 127.937C29.0355 145.287 62.1315 145.153 81.9028 131.973"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
          />
          <path
            d="M28.6342 39.1562C30.1603 39.1562 32.7853 38.5803 33.4767 39.9633"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
          />
          <path
            d="M46.3904 39.9633H54.4614"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
          />
          <path
            d="M29.4414 45.613C32.8646 45.613 36.9902 46.2776 39.9337 44.8059"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
          />
          <path
            d="M35.8981 23.0142C35.8981 17.2244 37.1495 9.82755 32.6697 5.34772C28.0262 0.704225 19.2502 1.3647 14.1064 4.45095"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
          />
          <path
            d="M28.6343 21.4C25.9198 18.0069 25.2779 12.9054 21.3704 10.28C17.7101 7.82074 10.7299 7.3576 6.6184 8.66579C4.18596 9.43975 3.09566 12.9345 2 14.9432"
            stroke="white"
            stroke-width="2.4"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </>
  );
}

function NameGreeting() {
  return (
    <>
      <div className="text-white absolute items-center">
        <div className="font-black text-center text-[45px] ">
          Hello! I'm Jad Bendarkawi
        </div>
        <div className="font-[200] text-[25px] text-center">
          software engineer + ux + product
        </div>
        <div className="font-[200] text-[25px] w-[963px] text-center pt-[22px]">
          i’m a senior at <b className="font-[600]">Princeton University</b>{" "}
          studying
          <b className="font-[600]"> electrical & computer engineering</b> with
          minors in <b className="font-[600]"> technology & society</b> and
          <b className="font-[600]"> robotics</b>. i’m excited about building
          valuable digital experiences that bring people together.{" "}
        </div>
        <div className="justify-center flex mt-[25px]">
          <button className="bg-white h-[50px] w-[50px] rounded-[30px] mr-3"></button>
          <button className="bg-white h-[50px] w-[50px] rounded-[30px] mr-3"></button>
          <button className="bg-white h-[50px] w-[50px] rounded-[30px] mr-3"></button>
        </div>
      </div>
    </>
  );
}

function Navigation() {
  return (
    <>
      <div
        className="text-black z-1 font-[200] text-[20px] border-black border-2 bg-white bg-opacity-50 rounded-[50px] p-3 shadow-lg"
        style={{ width: "fit-content" }}
      >
        <span className="p-5">resume</span>
        <span className="p-5">linkedin</span>
        <span className="p-5">github</span>

        <span className="p-5">projects</span>
        <span className="p-5">about</span>
        <span className="p-5">creative</span>
        <span className="p-5">contact</span>
      </div>
    </>
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
      <div className="text-white text-[30px] font-black">{title}</div>
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
        className="justify-center align-middle rounded-[20px] text-black border-[1px] border-black pr-[14px] pl-[14px] pt-[5px] pb-[5px] uppercase transition ease-in-out duration-200 bg-white"
        style={{ width: "fit-content" }}
      >
        {text}
      </div>
    </>
  );
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  onNavigate?: string;
  bgHoverColor?: string;
  skills?: string[];
}

function ProjectCard({
  title,
  description,
  bgHoverColor,
  skills,
}: ProjectCardProps) {
  const projectCardStyles = ` group bg-white w-[550px] h-[209px] border-2 border-black rounded-[10px] transition-all duration-200 ease-in no-underline hover:cursor-pointer hover:w-100px  ${bgHoverColor} `;

  return (
    <>
      <div className={projectCardStyles}>
        <div className="pl-7">
          <div
            className="text-black font-bold text-[30px] mb-[5px] pt-7 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            style={{ width: "fit-content" }}
          >
            {title}
          </div>
        </div>

        <div className="text-black text-[15px] pl-7 pr-7 pb-[14px] ">
          {description}
        </div>

        <div className="grid grid-flow-col justify-center gap-2">
          {skills?.map(function (skill) {
            return <SkillChip text={skill} />;
          })}
        </div>
      </div>
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
  return (
    <>
      <div className="flex justify-center">
        <nav
          className=" bg-white fixed mt-[20px] w-4/6 top-0 z-10 text-black font-[200] text-[20px] border-black border-2 bg-opacity-80 rounded-[50px] p-3 shadow-lg "
          data-headlessui-state=""
        >
          <div>
            <div className="relative justify-between">
              <div className="grid grid-cols-2 sm:items-center sm:justify-between">
                <div className=" sm:ml-2 sm:block">
                  <button
                    onClick={handleHomeClick}
                    className="bg-[#21444f] text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    home
                  </button>
                </div>
                <div className=" justify-self-end sm:mr-2 sm:block">
                  <button
                    onClick={handleProjectsClick}
                    className="text-black hover:bg-[#21444f] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    projects
                  </button>
                  <button className="text-black hover:bg-[#21444f] hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    about
                  </button>
                  <button className="text-black hover:bg-[#21444f] hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    creative
                  </button>
                  <button className="text-black hover:bg-[#21444f] hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        ref={homeRef}
        className="flex items-center justify-center pt-[172px]"
      >
        <Snail />
      </div>

      <div className="flex items-center justify-center pt-[172px]">
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
            title={"Robotic Art Installation"}
            description={
              "a project advised by the Self-Organizing Swarms & Robotics (SSR) Lab led by Radhika Nagpal "
            }
            bgHoverColor={`hover:bg-blue-400`}
            skills={["C", "psoc creator", "circuit design", "pid control"]}
          />
        </div>
      </div>
    </>
  );
}

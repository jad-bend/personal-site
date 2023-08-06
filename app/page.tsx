"use client";

import { useRef } from "react";
import Cursor from "./Cursor";
import Spline from "@splinetool/react-spline";

function nav() {
  return (
    <nav
      className="bg-white fixed sm:grid sm:grid-rows-1 sm:items-center sm:justify-items-stretch sm:h-12 top-0 w-screen"
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
            <div className="hidden sm:ml-2 sm:block">
              <button
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                Home
              </button>
            </div>
            <div className="hidden justify-self-end sm:mr-2 sm:block">
              <button className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                About
              </button>
              <button className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                Projects
              </button>
              <button className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Snail() {
  return (
    <>
      <div className="hover:animate-bounce">
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
          <a
            className="group bg-transparent h-[50px] w-[50px] rounded-[20px] mr-3 justify-center flex pt-[12px] transition ease-in-out duration-300 hover:bg-white"
            href="https://www.linkedin.com/in/jadbendarkawi/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-white transition ease-in-out duration-300 group-hover:fill-[#161616]"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            className="group bg-transparent h-[50px] w-[50px] rounded-[20px] mr-3 justify-center flex pt-[8px] transition ease-in-out duration-300 hover:bg-white"
            href="https://github.com/jad-bend"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 fill-white transition ease-in-out duration-300 group-hover:fill-[#161616]"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            className="group bg-transparent h-[50px] w-[50px] rounded-[20px] mr-3 justify-center flex pt-[10px] transition ease-in-out duration-300 hover:bg-white"
            href="mailto:jadb@princeton.edu"
          >
            <svg
              viewBox="0 0 8 6"
              className="h-7 w-7 rounded-[5px] fill-white transition ease-in-out duration-300 group-hover:fill-[#161616]"
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
      <div className="text-white text-[30px] font-[200] uppercase">{title}</div>
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
        className="justify-center align-middle rounded-[20px] text-white border-[1px] border-white pr-[14px] pl-[14px] pt-[5px] pb-[5px] uppercase transition ease-in-out duration-200 group-hover:bg-white group-hover:text-black group-hover:border-black"
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
  const projectCardStyles = `group bg-[#242424] w-[550px] h-[209px] rounded-[10px] transition-all duration-200 ease-in no-underline hover:cursor-pointer hover:w-100px  ${bgHoverColor} `;

  return (
    <>
      <div className={projectCardStyles}>
        <div className="pl-7">
          <div
            className="text-white font-black text-[30px] mb-[5px] pt-7 bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
            style={{ width: "fit-content" }}
          >
            {title}
          </div>
        </div>

        <div className="text-white text-[15px] pl-7 pr-7 pb-[14px] group-hover:text-black ">
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

  const aboutRef = useRef<null | HTMLDivElement>(null);
  const handleAboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex justify-center">
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
                    className="bg-[#21444f] text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    home
                  </button>
                </div>
                <div className=" justify-self-end sm:mr-2 sm:block">
                  <button
                    onClick={handleProjectsClick}
                    className="text-white hover:bg-[#21444f] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    projects
                  </button>
                  <button
                    onClick={handleAboutClick}
                    className="text-white hover:bg-[#21444f] hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    about
                  </button>
                  <button className="text-white hover:bg-[#21444f] hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    creative
                  </button>
                  <button className="text-white hover:bg-[#21444f] hover:text-white rounded-md px-3 py-2 text-sm font-medium">
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

      <div ref={aboutRef} className="pt-[100px] pb-[20px] justify-center flex ">
        <SectionHeader title="about me" />
      </div>
    </>
  );
}

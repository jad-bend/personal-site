"use client";

import Cursor from "./Cursor";
import Spline from "@splinetool/react-spline";

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
      <div className="text-white z-1 absolute items-center">
        <div className="font-black text-[45px] text-center">
          Hello! I'm Jad Bendarkawi
        </div>
        <div className="font-[200] text-[25px] text-center">
          software engineer + ux + product
        </div>
        <div className="font-[200] text-[25px] w-[865px] text-center pt-[22px]">
          i’m a senior at Princeton University studying electrical & computer
          engineering with minors in technology & society and robotics. i’m
          excited about building valuable digital experiences that bring people
          together.{" "}
        </div>
      </div>
    </>
  );
}

function Navigation() {
  return (
    <>
      <div className="text-white z-1 font-[200] text-[20px]">
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
      <div className="text-white z-1 font-[200] text-[30px] ">{title}</div>
    </>
  );
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  onNavigate?: string;
  bgHoverColor?: string;
}

function ProjectCard({ title, description, bgHoverColor }: ProjectCardProps) {
  const projectCardStyles = `bg-white w-[550px] h-[209px] border-2 border-black rounded-[10px] transition-all duration-300 ease-in hover:cursor-pointer hover:w-100px  ${bgHoverColor}`;
  return (
    <>
      <div className={projectCardStyles}>
        <div className="text-black  font-bold text-[30px] pt-7 pl-7">
          {title}
        </div>
        <div className="text-black text-[15px] pl-7 pr-7 ">{description}</div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <div className="absolute top-[80px] right-[174px]">
        <Navigation />
      </div>

      <div className="flex items-center justify-center pt-[172px]">
        <Snail />
      </div>

      <div className="flex items-center justify-center pt-[120px]">
        <NameGreeting />
      </div>

      <div className="pt-[175px] pl-[174px] pb-[20px]">
        <SectionHeader title="featured projects" />
      </div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-[10px] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          <ProjectCard
            title={"Microsoft Loop"}
            description={
              "digital expressions + homepage experience for the Microsoft Loop app, designed to enable live collaboration askdjasd"
            }
            bgHoverColor={"hover:bg-violet-400"}
          />
          <ProjectCard
            title={"TigerFocus"}
            description={
              "a pomodoro inspired self-study tool that enables Princeton students to track their work, time study sessions, and manage courses all in one place"
            }
            bgHoverColor={"hover:bg-orange-400"}
          />
          <ProjectCard
            title={"halalify"}
            description={
              "a lightweight chrome extension built to help Muslims make informed online grocery shopping decisions"
            }
            bgHoverColor={`hover:bg-emerald-400`}
          />
          <ProjectCard
            title={"Robotic Art Installation"}
            description={
              "a project advised by the Self-Organizing Swarms & Robotics (SSR) Lab led by Radhika Nagpal "
            }
            bgHoverColor={`hover:bg-blue-400`}
          />
        </div>
      </div>

      <div className="pt-[50px] pl-[174px] pb-[20px]">
        <SectionHeader title="about me" />
      </div>
    </>
  );
}

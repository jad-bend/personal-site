"use client";

import { MouseEventHandler, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { useRouter } from "next/router";
import Link from "next/link";
import Cursor from "./Cursor";

function Icon() {
  return (
    <>
      <div className="lg:scale-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="154"
          height="230"
          viewBox="0 0 154 230"
          fill="none"
        >
          <path
            d="M78.8239 42.9764C72.4129 72.4217 67.23 102.049 61.8325 131.693C57.5656 155.127 53.3531 178.573 49.064 202.002C48.3819 205.728 47.6183 209.433 46.8126 213.134C46.6306 213.969 46.3507 217.718 45.3885 218.29C43.5195 219.402 41.3676 200.582 41.3453 199.891C40.7222 180.617 45.171 160.679 51.3979 142.55C57.7559 124.039 67.2912 103.86 82.002 90.4574C88.4151 84.6146 99.6195 76.4678 108.809 81.0132C115.789 84.4662 115.424 93.2996 113.622 99.7308C110.251 111.763 100.909 121.136 90.9316 128.128C88.3828 129.915 85.6911 131.495 82.8587 132.784C82.842 132.792 78.4131 134.662 78.4079 134.247C78.3979 133.442 81.9552 131.453 82.1408 131.337C86.862 128.367 91.903 125.851 97.1407 123.927C101.823 122.208 112.314 118.518 116.768 122.842C118.687 124.704 119.031 127.773 118.869 130.294C118.421 137.287 115.084 144.135 111.138 149.789C103.477 160.766 90.9351 171.278 77.293 173.175C73.3098 173.729 69.135 173.491 65.381 171.937C62.2312 170.633 61.169 168.724 59.3573 166.192"
            stroke="white"
            stroke-width="0.49152"
            stroke-linecap="round"
          />
          <path
            d="M0.999777 60.288C3.97425 58.6743 7.32968 57.6501 10.5323 56.6386C26.6033 51.5629 43.0149 47.4052 59.4495 43.7008C90.4076 36.7229 121.592 32.6406 153.195 30.2788"
            stroke="white"
            stroke-width="0.49152"
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
      <div className="text-[#f8f3f1] absolute items-center">
        <div className="font-black text-center text-[45px] ">
          Hello! I'm Jad Bendarkawi
        </div>
        <div className="text-[25px] text-center font-[100]">
          software engineer + ux + product
        </div>
        <div className="font-[200] text-[25px] lg:w-[963px] text-center pt-[22px] text-[#f8f3f1]">
          i’m a senior at{" "}
          <b className="font-[600] text-orange-300">Princeton University</b>{" "}
          studying
          <b className="font-[600] text-indigo-300">
            {" "}
            electrical & computer engineering
          </b>{" "}
          with minors in{" "}
          <b className="font-[600] text-blue-300"> technology & society</b> and
          <b className="font-[600] text-emerald-300"> robotics</b>. i’m excited
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
                    className="hidden sm:ml-2 sm:block bg-[#f8f3f1] text-[#161616] rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    home
                  </button>
                </div>
                <div className="hidden justify-self-end sm:mr-2 sm:block">
                  <button
                    onClick={handleProjectsClick}
                    className="text-[#f8f3f1] hover:bg-[#f8f3f1] hover:text-[#161616] rounded-md px-3 py-2 text-sm font-medium"
                  >
                    projects
                  </button>
                  <button
                    onClick={handleCreativeClick}
                    className="text-[#f8f3f1] hover:bg-[#f8f3f1] hover:text-[#161616] rounded-md px-3 py-2 text-sm font-medium"
                  >
                    creative
                  </button>
                  <button className="text-[#f8f3f1] hover:bg-[#f8f3f1] hover:text-[#161616] rounded-md px-3 py-2 text-sm font-medium">
                    resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex items-center justify-center pt-[120px]">
        <Icon />
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
            bgHoverColor={"hover:bg-violet-500"}
            skills={["react", "typescript", "ux design", "html/css"]}
          />
          <ProjectCard
            title={"TigerFocus"}
            description={
              "a pomodoro inspired self-study tool that enables Princeton students to track tasks, time sessions, and manage courses all in one place"
            }
            bgHoverColor={"hover:bg-orange-500"}
            skills={["python flask", "javascript", "html/css", "figma"]}
          />
          <ProjectCard
            title={"halalify"}
            description={
              "a lightweight chrome extension built to help Muslims make informed online grocery shopping decisions"
            }
            bgHoverColor={`hover:bg-emerald-500`}
            skills={["figma", "ux design", "product development"]}
          />
          <ProjectCard
            title={"Robotic Art Installation"}
            description={
              "a project advised by the Self-Organizing Swarms & Robotics (SSR) Lab led by Radhika Nagpal "
            }
            bgHoverColor={`hover:bg-blue-500`}
            skills={["C", "psoc creator", "circuit design", "pid control"]}
          />
        </div>
      </div>

      <div
        ref={creativeRef}
        className="pt-[100px] pb-[20px] justify-center flex "
      >
        <SectionHeader title="creative stuff" />
      </div>
    </>
  );
}

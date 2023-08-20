"use client";

import Image from "next/image";
import screenshot from "./loop.png";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../Footer";

function ProjectIntro() {
  return (
    <>
      <div className="inline-block text-left">
        <div className="font-black text-[30px] text-violet-400">
          Microsoft Loop - Loop Workspaces
        </div>

        <div className="text-[20px] font-extralight pt-[20px] lg:w-[923px]">
          As a{" "}
          <b className="text-violet-400 font-black">software engineer intern</b>
          , I worked on building new additions to the homepage experience for
          the Microsoft Loop App.
        </div>

        <div className="text-[20px] font-extralight pt-[20px]">
          {" "}
          <b className="font-bold">summer 2023</b> / REACT, TYPESCRIPT,
          HTML/CSS, KUSTO, JEST
        </div>
      </div>
    </>
  );
}

function ProjectTakeaways() {
  return (
    <>
      <div className="font-bold text-[30px] pt-[50px]">
        key takeaways + contributions
      </div>
      <div className="justify-center flex pt-[30px]">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-[80px]">
          <div className="w-[267px]">
            <h2 className="font-bold text-[24px] text-left">
              shipping software to production
            </h2>
            <div className="text-left pt-[20px]">
              {" "}
              Remediated a top priority consumer pain point by rolling-out
              additions to the homepage to production. Documented development
              plan and roll-out, built according to shipping requirements, and
              pushed thoroughly tested and high quality code.
            </div>
          </div>

          <div className="w-[267px]">
            <h2 className="font-bold text-[24px] text-left">
              performance & telemetry
            </h2>
            <div className="text-left pt-[20px]">
              {" "}
              Built dashboards in Kusto to log performance and updated
              diagnostic data inventories to more contextually track user
              engagement. Shared user insights with the team and validated
              success of the feature.
            </div>
          </div>

          <div className="w-[267px]">
            <h2 className="font-bold text-[24px] text-left">
              cross functional collaboration
            </h2>
            <div className="text-left pt-[20px]">
              {" "}
              Communicated and worked across engineering, product management,
              and design to resolve bugs, define success metrics, clarify edge
              cases, and understand full feature scope.{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default function page() {
  return (
    <>
      <div className="flex justify-center">
        <nav
          className="bg-[#ffffff0a] fixed sm:grid sm:grid-rows-1 sm:items-center sm:justify-items-stretch sm:h-12 top-0 w-screen z-10 backdrop-blur-lg"
          data-headlessui-state=""
        >
          <div>
            <div className="relative justify-between">
              <div className="grid grid-cols-2 sm:items-center sm:justify-between">
                <div className=" sm:ml-2 sm:block">
                  <Link href="/">
                    <button
                      className=" sm:ml-2 sm:block bg-[#618F81] text-[#f8f3f1] rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      return home
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.75 }}
      >
        <div className="justify-center flex pt-[100px]">
          <Image
            src={screenshot}
            width={1000}
            height={500}
            alt="loop app workspace"
            className="rounded-[20px]"
          />
        </div>

        <div className="text-center pt-[50px]">
          <ProjectIntro />
          <ProjectTakeaways />
        </div>
      </motion.div>

      <div className="pt-[100px]">
        <Footer />
      </div>
    </>
  );
}

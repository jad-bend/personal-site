"use client";

import Image from "next/image";
import screenshot from "./tigerf.png";
import colors from "./test2.png";
import screens from "./screens.png";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../Footer";

function ProjectIntro() {
  return (
    <>
      <div className="inline-block text-left">
        <div className="font-black text-[30px] text-orange-300">
          TigerFocus - pomodoro timer + course manager{" "}
        </div>

        <div className="text-[20px] font-extralight pt-[20px] lg:w-[923px]">
          A project for{" "}
          <b className="text-orange-300 font-black">
            COS333: Advanced Programming Techniques
          </b>
          ; I worked on the user research, end-to-end design, and software
          development of a productivity tool for Princeton students.
        </div>
        <div className="text-[20px] font-extralight pt-[20px]">
          {" "}
          <b className="font-bold">spring 2023</b> / PYTHON FLASK, SQLALCHEMY,
          JAVASCRIPT, HTML/CSS, FIGMA, UX DESIGN
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
              end-to-end software development{" "}
            </h2>
            <div className="text-left pt-[20px]">
              {" "}
              Full-stack development experience from database querying and
              management in PostgreSQL/SQLAlchemy, processing requests and
              routing with Python Flask, and front-end development with JS and
              HTML/CSS.
            </div>
          </div>

          <div className="w-[267px]">
            <h2 className="font-bold text-[24px] text-left">
              user experience research & design{" "}
            </h2>
            <div className="text-left pt-[20px]">
              {" "}
              Built experience to two user groups (students and instructors).
              Held 1:1 user interviews, conducted heuristic evaluation for
              product validation, and continuously improved and designed with
              users in mind.
            </div>
          </div>

          <div className="w-[267px]">
            <h2 className="font-bold text-[24px] text-left">
              brand identity & product vision{" "}
            </h2>
            <div className="text-left pt-[20px]">
              {" "}
              Led brand vision; drawing on inspiration from productivity
              research, competitor tools, and user feedback to define aesthetics
              / theming and the MVP feature set.{" "}
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
      <div className="text-center pt-[50px]  ">
        <div className="font-bold text-[30px] ">project description</div>
        <div className="inline-block text-left lg:w-[958px] pt-[30px]">
          In response to the need for more organization expressed by Princeton
          students, Ashley Ponce, Howard Wang, and myself designed TigerFocus; a
          web-based, individualized study tool meant to facilitate better habits
          through tracking assignments and the Pomodoro study method. This
          method uses a patterned cycle of work and break to maximize
          concentration. Students are able to create their own course entries
          and assignment lists to track due dates, but can also import
          assignment lists created and made public by fellow students and
          instructors to save the hassle of creating your own.
        </div>
      </div>

      <div className="font-bold text-[30px] pt-[50px] justify-center flex ">
        branding + design principles
      </div>

      <div className="font-light text-[20px] pt-[30px] justify-center flex italic">
        lo-fi, pastel, soft, soothing, cute, rounded, cartoon, cafe, nature
      </div>
      <div className="text-center pt-[30px] flex items-center justify-center ">
        <div className="grid grid-cols-2 gap-[55px] justify-center pt-[30px]">
          <div>
            <Image
              src={colors}
              width={478}
              height={263}
              alt="color palette for tigerfocus"
            />
          </div>
          <div className="inline-block text-left lg:w-[426px] ">
            Guided by our value proposition of delivering a calming, lo-fi
            environment for students to study with, our brand identity is
            defined by a <b>soothing</b>, <b>pastel</b>, and{" "}
            <b>cafe-inspired</b> aesthetic. Emulating the vibe of a cute local
            coffee shop helps our users calmly get into the zone anywhere,
            anytime. Coupled with curated lo-fi music and artwork, TigerFocus
            delivers an experience that reduces study anxiety and eases students
            into a work framework that encourages breaks.
          </div>
        </div>
      </div>

      <div className="font-bold text-[30px] pt-[50px] justify-center flex ">
        core experience
      </div>
      <div className="font-light text-[20px] pt-[20px] justify-center flex italic">
        student view, public course list, instructor view, pomodoro timer{" "}
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={screens}
          width={960}
          height={491}
          alt="tigerfocus view screens"
          className="pt-[30px]"
        />
      </div>

      <div className="text-center pt-[50px]  ">
        <div className="font-bold text-[30px] ">tech stack + development</div>
        <div className="inline-block text-left lg:w-[958px] pt-[30px]">
          TigerFocus is a three-tier web application deployed on Render. The
          server was developed using Python Flask, utilizing the Jinja2 template
          engine for page routing / rendering. Our database runs on PostgreSQL,
          with SQLAlchemy for effective object-relational mapping. Frontend
          development was done in HTML/CSS and JavaScript, with AJAX for dynamic
          content updates, such as real-time searching through public course
          listings.
        </div>
      </div>

      <div className="pt-[100px]">
        <Footer />
      </div>
    </>
  );
}

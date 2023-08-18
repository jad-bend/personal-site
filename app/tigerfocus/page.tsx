import Image from "next/image";
import screenshot from "./tigerf.png";
import Link from "next/link";

function ProjectIntro() {
  return (
    <>
      <div className="inline-block text-left">
        <div className="font-black text-[30px] text-orange-400">
          TigerFocus - pomodoro timer + course manager{" "}
        </div>

        <div className="text-[20px] font-extralight pt-[20px] lg:w-[923px]">
          A project for{" "}
          <b className="text-orange-400 font-black">
            COS333: Advanced Programming Techniques
          </b>
          , I worked on... COMING SOON
        </div>
        <div className="text-[20px] font-extralight pt-[20px]">
          {" "}
          <b className="font-bold">spring 2023</b> / PYTHON FLASK, JAVASCRIPT,
          HTML/CSS, FIGMA, UX DESIGN
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
          className="bg-[#161616] fixed sm:grid sm:grid-rows-1 sm:items-center sm:justify-items-stretch sm:h-12 top-0 w-screen z-10"
          data-headlessui-state=""
        >
          <div>
            <div className="relative justify-between">
              <div className="grid grid-cols-2 sm:items-center sm:justify-between">
                <div className=" sm:ml-2 sm:block">
                  <Link href="/">
                    <button
                      className=" sm:ml-2 sm:block bg-[#f8f3f1] text-[#161616] rounded-md px-3 py-2 text-sm font-medium"
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
      </div>
    </>
  );
}

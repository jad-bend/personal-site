"use client";

import { useScrollPosition } from "./useScrollPosition";

const NavBar = () => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className="flex justify-center pt-10 sticky top-0 z-[1000]">
        <div
          className={classNames(
            scrollPosition > 90
              ? "bg-[#ffffffcd] backdrop-blur text-[#5c76c9]"
              : "bg-none ",
            "inline-block rounded-[300px] pr-5 pl-5 duration-500 transition-all"
          )}
        >
          <button className="p-5">work</button>
          <button className="p-5">about</button>
          <button className="p-5">creative</button>
          <button className="p-5">resume</button>
          <button className="p-5">contact</button>
        </div>
      </div>
    </>
  );
};

export default NavBar;

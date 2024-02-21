import React from "react";

import { MdExpandMore } from "react-icons/md";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center ">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center ">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl ">
          <img src="/amit1.jpg" className="rounded-full h-64 w-64 " />
        </div>

        <h1 className="uppercase font-bold text-gray-700 text-7xl  ">
          Full stack developer
        </h1>

        <p className=" text-xl max-w-sm mx-auto  ">
          I have good experience of building and desgining software.
          Currently,I love to work on web application using technologies like
          React ,Tailwind ,Next JS and Express js.
        </p>

        <Link href="/#me">
          <div
            className="group  flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider"
         >
            Know more
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

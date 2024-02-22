import React from "react";

import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import amit1 from "/public/image/amit1.jpg";

const HomePage = () => {
  return (
    <div id="home" className="h-full w-[600px] md:w-full ">
      <div className=" h-full pt-24 flex flex-col justify-around items-center">
        <div className=" mt-6 overflow-hidden ">
          <Image src={amit1} alt="me" className=" w-64 h-64 rounded-full" />
        </div>

        <h1 className="  uppercase text-5xl text-center mt-6 font-bold text-gray-700 md:text-7xl">
          full stack developer
        </h1>

        <p className="text-2xl md:text-xl text-center max-w-sm mx-auto mt-3  ">
          I have good experience of building and desgining software. Currently,
          I love to work on web application using technologies like React,
          Tailwind,NextJS .
        </p>

        <Link href="/#me">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            know more
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

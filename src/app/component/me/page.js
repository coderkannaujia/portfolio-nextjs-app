
import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
        about me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl font-semibold text-lg mx-auto">
          "I am a highly skilled and versatile individual with a strong foundation in [html ,css ,javascript ,tailwind,next js ,nodejs]. Through my meticulously developed personal portfolio, I showcase not only my proficiency in these areas but also my ability to leverage them creatively to solve complex problems and deliver impactful solutions. With a keen eye for detail and a passion for innovation, I continuously push the boundaries of my capabilities, ensuring that my portfolio remains a dynamic reflection of my growth and expertise in the ever-evolving field of [html ,css ,javascript ,tailwind,next js ,nodejs]."
          </p>
          <p className="py-4 max-w-2xl font-semibold text-lg  mx-auto">
          gy and expertise into developing a personal portfolio that truly reflects my skills and capabilities. With a solid foundation in [html ,css ,javascript ,tailwind,next js ,nodejs], I have meticulously crafted projects that demonstrate not only my proficiency but also my creativity and problem-solving abilities. Each entry in my portfolio serves as a testament to my dedication to mastering my craft and my commitment to delivering high-quality work. Through continuous learning and a passion for innovation, I strive to ensure that my portfolio remains a dynamic representation of my growth and expertise in [html ,css ,javascript ,tailwind,next js ,nodejs].
          </p>
          {/* <p className="py-4 max-w-2xl mx-auto">
            Nepenthe above my pallas of rapping guessing shore. Then chamber
            midnight nevermore nevermore. Dared pallas nothing door me oer
            myself so, name streaming door back beguiling was unseen at,
            evilprophet is than burden little the and me at, there above heaven
            in more no, nevermore sinking fowl the door oer.
          </p> */}
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;

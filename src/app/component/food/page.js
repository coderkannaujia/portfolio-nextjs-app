import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import food from "/public/image/food.png"

const FoodApp = () => {
 return (
  <div className="h-fit w-full text-center">
    <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
      <div className="flex">
       <Link href="/component/portfolio">
          <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
            <BiChevronLeft size={25} /> back
          </div>
        </Link>
      </div>

      <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
        food
      </h1>

      <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
        <Image src={food} alt="bla" layout="fill" objectFit="cover" />
      </div>

      <h2 className="text-center md:text-left my-4 text-2xl font-bold">
        Description
      </h2>

      <p>
      FlavorBites is a tantalizing static UI website that celebrates the joy of culinary exploration and gastronomic delights. Crafted with passion and attention to detail, FlavorBites invites visitors on a mouthwatering journey through a world of flavors, recipes, and culinary inspiration.
      </p>

      <div className="flex items-center justify-center gap-10">
        <Link href="https://asianfoodk-nextjs-app.vercel.app/">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            demo
            <span className="duration-200 ease-in">
              <AiOutlineCaretRight size={18} className="ml-2" />
            </span>
          </div>
        </Link>

        <Link href="https://github.com/coderkannaujia">
          <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            my portfolio
            <span className="duration-200 ease-in">
              <FaGithub size={18} className="ml-2" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  </div>
 )
}

export default FoodApp

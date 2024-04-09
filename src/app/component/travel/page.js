import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import crud from "/public/image/crudimg.png"

const Travel = () => {
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
        <Image src={crud} alt="crudimg" layout="fill" objectFit="cover" />
      </div>

      <h2 className="text-center md:text-left my-4 text-2xl font-bold">
        Description
      </h2>

      <p>
      This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a simple yet effective example of how to build a full-stack application with these technologies.
      </p>

      <div className="flex items-center justify-center gap-10">
        <Link href="https://crud-fronted-project.vercel.app/">
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

export default Travel

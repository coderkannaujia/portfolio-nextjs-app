import React from 'react'
import Image from 'next/image'

import html from "/./public/assets/experience/html.png"
import css from "/./public/assets/experience/css.png"
import javascript from "/./public/assets/experience/javascript.png"
import react from "/./public/assets/experience/react.png"
import nextjs from "/./public/assets/experience/nextjs.png"
import tailwind from "/./public/assets/experience/tailwind.png"
import express from "/./public/assets/experience/express.png"
import node from "/./public/assets/experience/node.png"


const Experience = () => {

 const experience = [
  {
    id:1,
    title:"HTML",
    src:html
  },
  {
   id:2,
   title:"css",
   src:css
 },
 {
  id:3,
  title:"javascript",
  src:javascript
},
{
 id:4,
 title:"React",
 src:react
},
{
 id:5,
 title:"NEXT JS",
 src:nextjs
},
{
 id:6,
 title:"tailwind",
 src:tailwind
},
{
 id:7,
 title:"NODE",
 src:node
},
{
 id:8,
 title:"Express js",
 src:express,
}
 ]



  return (
    <div id='experience' className='w-full'>
   <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
      <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold'>
      experience
      </h2>

      <p className='py-4 font-bold text-md '>
      In my personal portfolio, I showcase a robust collection of technical skills honed through hands-on experience and dedicated learning. With a deep passion for technology, I've cultivated proficiency in a diverse range of areas including programming languages such as java, JavaScript,Html ,css ,Tailwind . My experience extends to frameworks and libraries like React.js, Node.js, and Express js, 
      </p>
      
         <div className='grid lg:grid-cols-4 gap-8'>
          {
          experience.map(({id,title,src})=>(
           
           <div key={id} className='flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 odd:shadow-rose-400 even:shadow-blue-400'>
            
            <Image src={src} className='w-20 h-20' alt={title} />
            <h3 className='font-light'>{title}</h3>
            </div>

          ))}

          </div> 
       </div>
    </div>
  )
}

export default Experience

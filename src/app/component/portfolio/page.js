import Link from 'next/link';
import React from 'react'
import { MdExpandMore } from "react-icons/md";
import Image from 'next/image';

import food from "/public/image/food.png"
import travel from "/public/image/travel.png"
import movie from "/public/image/movie.png"
import education from "/public/image/education.png"


const Portfolio = () => {

      const portfolio =[
          {
            id:1,
            title:"nextjs food app", 
            imageSrc:food,
            url:"food-app"
          },
          {
           id:2,
           title:"travel-app",
           imageSrc:travel,
           url:"travel-app"
         },
         {
          id:3,
          title:"movie-react-app",
          imageSrc:movie,
          url:"movie-react-app"
        },
        {
         id:4,
         title:"education-next-app",
         imageSrc:education,
         url:"education-next-app"
       }
      ]



  return (
    <div id='portfolio' className='w-full'>
     <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
      <h2 className='text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold '>portfolio</h2>
      <p className='py-4 text-xl font-bold'>
      A portfolio is a snapshot of one's accomplishments, skills, experiences, and projects, meticulously curated to showcase one's abilities and potential. It serves as a dynamic representation of growth and proficiency, illustrating a journey of continuous learning and development. 
      </p>
      
      {/* /portfolio/installNode.jpg */}
      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>
             {portfolio.map(({id ,title,imageSrc ,url})=>(
                 <Link key={id} href='youtube.com'> 
                  <div className='cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md '>
                   <Image 
                   src={imageSrc}
                   alt={title}
                   className='rounded-md duration-200 hover:scale-110' />
                   <h2 className='text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4'>
                   
        

                  </h2>
                  </div>
                 </Link>
              ))}
              </div>

          <div className='flex items-center justify-center'>
          <Link href="/#portfolio">
          <div
            className="group  flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer"
         >
            all projects
            <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-5">
              <MdExpandMore size={25} />
            </span>
          </div>
          </Link>
          </div>


      </div>
    </div>
  )
}

export default Portfolio

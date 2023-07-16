"use client"
import React from 'react'
import { commanFont, desscriptFont, subHeadingFont } from '@/app/font'
import { testomonialdata } from '@/constants'
import { testomonialType } from '@/types';
import { useState } from 'react';
import Link from 'next/link';
import { GrCaretNext } from 'react-icons/gr';

import Image from 'next/image';
import { count } from 'console';
const TestominalsCard = ({ card }: { card: testomonialType }) => {
  const { userid, comment, star, date } = card


  return (
    <div className="">
    <div className='w-[350px] h-auto relative  p-5 '>
      {/* for bg color */}
      <div className=" absolute top-0 bottom-0 right-0 left-0 bg-blue-300 opacity-10 z-[-6]   rounded-lg" />
      {/* for container */}
      <div className="">
        <div ><div className={`${subHeadingFont.className} text-[64px] text-cyan-600`}>"</div>
          <div>
            {comment.substring(0, 300)}... 
          </div>

          <div className="text-[13px] text-end">Date:{date} </div>

          <div className="flex flex-row justify-between items-center mt-7">
            <div className="">
              <p>{userid.username}</p>
              <p>{userid.email}</p>
            </div>
            <Image src={userid.image} width={40} height={80} alt={userid.username} className='rounded-full' />
          </div>

        </div>
      </div>
      </div>
      {/* <div className={`${subHeadingFont.className} text-[64px] text-cyan-600  text-end`}>"</div>  */}
    </div>
  )
}

const Testominals = () => {
  const arr: number[] = [23, 12, 32]
  const [count, setCount] = useState(0)
  return (
    <div className={`${commanFont.className}`}>

{/* for heading  */}
      <div className={`relative `}>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-3">
            <p className={`${desscriptFont.className} bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent`}>- WHAT OTHER SAY</p>
            <h1 className={`  ${subHeadingFont.className} bg-gradient-to-t from-orange-500 to-yellow-300 bg-clip-text text-transparent   drop-shadow-md text-center font-extrabold text-[48px]`} >Testmotionals.</h1>
          </div>
        </div>

      


        {/* for background enhancs */}
        <div className=" w-full absolute top-0 bottom-0 right-0 left-0 z-[-8] h-[250px] bg-[url(/testimonial.png)] bg-cover bg-no-repeat bg-[top] blur-md opacity-10" />
        <div className="absolute top-0 bottom-0 right-0 left-0 z-[-6] h-[250px] bg-white opacity-30 shadow-md" />
      </div>

        {/* card container */}
        <div className="relative ">
          <div className="  flex justify-center items-center gap-4  flex-col md:flex-wrap lg:flex-row ">
            {
              testomonialdata.map((card, i) => (
                (i >= count && i < count + 3) &&
                <div className="" id={`card${i}`}>
                  <TestominalsCard key={i} card={card} />

                </div>
              ))
            }


            {/* for button scroll  */}
            <div className="  absolute  left-0 right-0 md:top-0 bottom-[-20px] md:bottom-0 flex justify-between items-center ">
              <button className={`disabled:text-red-400 flex flex-row justify-center items-center bg-none drop-shadow-xl text-slate-400  hover:bg-white hover:opacity-40 p-2 rounded-xl`} onClick={() => count !== 0 && setCount(count - 2)} disabled={count === 0}  ><span className={`${subHeadingFont.className}  text-[34px]`}>{'<'}</span> <span className='md:hidden text-[12px] text-slate-400 '>Previous</span> </button>

              <button className={`flex flex-row justify-center items-center bg-none drop-shadow-xl text-slate-400 disabled:text-red-400 hover:bg-white hover:opacity-40 p-2 rounded-xl`} onClick={() => testomonialdata.length > count + 2 && setCount(count + 2)} disabled={count + 2 >= testomonialdata.length}><span className='md:hidden text-[12px] text-slate-400  '>Next</span> <span className={`${subHeadingFont.className}  text-[34px]`}>{'>'}</span></button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Testominals

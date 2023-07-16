import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { commanFont, subHeadingFont } from '../layout'
import { aboutusdata } from '@/constants'
const AboutUs = () => {
    return (
        <div className='relative flex flex-col justify-center items-center lg:flex-row'>
            <h2 className={` block lg:hidden  ${subHeadingFont.className} bg-gradient-to-t from-orange-500 to-yellow-300 bg-clip-text text-transparent   drop-shadow-md text-center font-extrabold text-[48px]`}>About Us</h2>
            <div className="left w-full  lg:w-1/2 ">
                <Image src={'/aboutus.png'} width={2000} height={2000} className='w-full h-auto' alt='about us icon' />
            </div>
            <div className="right w-full  lg:w-[50%] ">
                <h2 className={` hidden lg:block  ${subHeadingFont.className} bg-gradient-to-t from-orange-500 to-yellow-300 bg-clip-text text-transparent   drop-shadow-md text-center font-extrabold text-[48px]`}>About Us</h2>
                <div className={`text-slate-500 drop-shadow-sm text-12px sm:text-[16px] md:text-[22px] w-auto 
            ${commanFont.className}`} >
                  {aboutusdata.map((paragraph ,i)=>(
                    <p key={i}>
                       {paragraph} 
                    </p>
                  ))}
                </div>
            </div>

        </div>
    )
}

export default AboutUs

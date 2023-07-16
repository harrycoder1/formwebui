import React from 'react'
import { headingFont , commanFont } from '@/app/font'
import Image from 'next/image'

const Hero = () => {
  return (
    // hero container 
    <div className='flex flex-col md:flex-row items-center '>
      <div className="herodetail w-auto  md:w-1/2 ">

      <h1 className={`${headingFont.className} text-[28px] md:text-[32px] lg:text-[64px] xl:text-[82px] bg-gradient-to-r from-cyan-800 via-violet-600 to-teal-600 bg-clip-text text-transparent`}> Welcome TO 
{' '} <br className='sm:hidden'/>
<span className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent' >h-Quiz</span> </h1>

<p className={`text-slate-500 drop-shadow-sm text-12px sm:text-[16px] md:text-[22px] w-auto ${commanFont.className}`}>
Welcome to our h-Quiz website! Create, search, update, and delete quizzes, or browse through our collection of quizzes created by other users. Test your knowledge and have fun!

</p>
</div>

{/* <div className=" w-[50%] h-auto"> */}
<div className="w-[100%] md:w-[50%] flex justify-end">
<Image src={'/herop-2.png'} alt='wel' width={1000} height={1000} className='min-w-[300px] w-[520px] max-w-auto h-auto'/>

</div>

{/* </div> */}

    </div>

  )
}

export default Hero

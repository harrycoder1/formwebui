"use client"
import { footerlinks, mediaDetailData } from '@/constants'
import React from 'react'
import Image from 'next/image'
import { footerLinksType } from '@/types'
import { commanFont, desscriptFont } from '@/app/font'
import FormInput from './FormInput'
import {useState} from 'react'
const FooterLinks =({link}:{link:footerLinksType})=>{
const [userData ,setUserData] = useState({}) 
  return (
    <div className={`${commanFont.className}  text-slate-400 drop-shadow-sm`}>
    <h2 className={`${desscriptFont.className} bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-md text-[24px]`}>{link.title}</h2>
    <div className="py-3">
    {link.expore.map((item)=>(
      
      <div className="">
      <p className='font-semibold'>{item.name}</p>
      <p>{item.descrip}</p>
      </div>
    ))}
    </div>
    </div>
  )
}
const Footer = () => {
  return (
    <div className={`mt-16 ${commanFont.className}`}>
      {/* for media share section */}
      <div className="flex flex-wrap md:flex-row justify-center gap-12 items-center ">

        {mediaDetailData.map((item)=>(
          <div className='flex flex-col justify-center items-center'>
            <Image src={item.logo} width={200} height={200} className='w-[40px] h-[40px]'  alt=''/>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* for footer */}
      <div className="flex flex-row mt-8">
 <div className="left w-full flex flex-col md:flex-wrap lg:flex-row   justify-between gap-2 ">
  {/* for resourses */}

  <div className="w-[350px]"><FooterLinks link={ footerlinks[2]}  /></div>
<div className="w-[350px]"><FooterLinks link={ footerlinks[1]}  /></div>

<div className="w-[350px]"><FooterLinks link={ footerlinks[3]} /></div>



 </div>
 <div className="right w-1/3 flex justify-center items-center">
  <div className="">
 <FormInput btnFunc={()=>{}} btnTyp='button' placeholder='Enter the name' setState={()=>{}} state='' title='name' />
</div>

 </div>
 </div>
    </div>
  )
}

export default Footer

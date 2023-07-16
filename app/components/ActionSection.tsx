import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { actionBoxType } from '@/types'
import { commanFont, subHeadingFont } from '../layout'
import {actiiondata} from '@/constants'
export const ActionCard =({data ,key}:{data:actionBoxType ,key:number})=>{
return (
  <div  className='flex-col justify-center items-center relative '>


         {/* <Link  href={data.path} className=' no-underline'> */}
    <div className="p-4">
 
  <Image src={data.imgUrl} width={1000} height={1000} className={`w-[280px]  h-[250px] peer/detailsection`} alt={data.title} />

        {/* for gladmorphism effect */}
        <div className={`peer-hover/detailsection:hidden absolute top-0 right-0 left-0 bottom-0 bg-white opacity-20  rounded-2xl shadow-xl z-[-3] `} /> 

        {/* for detail section */}
<div className={`hidden peer-hover/detailsection:block absolute right-0 top-0 bottom-0 left-0`}>

  <div className=" bg-white opacity-40 absolute right-0 top-0 bottom-0 left-0" />
  <div className="flex flex-col justify-center items-center">

  <p>{data.descriptiom}
  </p>
  {/* for btn  */}
  <div className="relative    px-4 py-2 text-sm  ">
  <div className=" bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-30   shadow-xl rounded-xl  absolute right-0 top-0 bottom-0 left-0 " />

  <Link href={""} className='no-underline z-[2] '>Open page</Link>
  </div>
  </div>

   </div>
  </div>
  <p className={`${commanFont.className} text-[20px] text-center`}>{data.title}</p>

  {/* </Link> */}

  </div>
)

}

const ActionSection = () => {
  return (
    <div>
      <h1 className={`${subHeadingFont.className} bg-gradient-to-t from-orange-500 to-yellow-300 bg-clip-text text-transparent   drop-shadow-md text-center font-extrabold text-[48px]`}>Get Start here !</h1>
      
<div className="flex flex-col md:flex-row justify-center md:flex-wrap  items-center gap-20">
{actiiondata.map((data,i)=>(
<ActionCard  key={i} data={data}/>

))}

</div>

    </div>
  )
}

export default ActionSection

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navlinks } from '@/constants'

const Nav = () => {
  const user = true
  return (
    <nav className='flex flex-col md:flex-row justify-between items-center lg:px-3'>
      <div className="w-[118px] h-auto">
      <Image src={'/logosym.svg'} width={118} height={30}  className='w-[118px] h-auto' alt='h-quize'/>
      </div>
     {/* for navlinks */}
     <div className=" flex flex-row gap-5">
{
  navlinks.map((link)=>(
    <Link href={link.url} className='list-none no-underline text-slate-600 drop-shadow-lg'  >{link.title}</Link>
  ))
}
{user ?
  <button>Profile</button> :
  <button>Sign In</button>
}


     </div>
    </nav>
  )
}

export default Nav

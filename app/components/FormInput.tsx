import { formInputType } from '@/types'
import React from 'react'

const FormInput = ({btnTyp ,title, placeholder , state , setState ,btnFunc}:formInputType) => {

    
  return (
    <div>
        <label htmlFor={title}>{title}</label>
        <input type={title} placeholder={placeholder} className='focus-within:outline-none px-4 py-2' />
        <button className='p-2 '>{'->'}</button>
      
    </div>
  )
}

export default FormInput

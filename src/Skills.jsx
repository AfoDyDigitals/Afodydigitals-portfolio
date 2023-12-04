import React from 'react'

function Skills() {
  return (
    <div className='flex flex-col justify-center '>
      <hr className='items-center w-auto mx-[42px] mt-[56px] md:w-auto mx-[135px] '></hr>
        <div className='flex mt-[32px] justify-center text-[20px] font-bold text-amber-500  md:text-[43px] '>
             Skills & Technology
        </div>
        <div className='gap-2 columns-5 mt-[30px] mb-[30px] md:flex mx-[59px]'>
          <img className='w-[32px] md:w-[43.71px] h-[43.62px]' src='./src/Graphics/CSS.svg' /> 
          <img className='w-[32px] md:w-[32px] h-[43.62px]' src='./src/Graphics/Wordpress.svg' /> 
          <img className='w-[32px] md:w-[43.71px] h-[43.62px]' src='./src/Graphics/React.svg' />
          <img className='w-[32px] md:w-[43.71px] h-[43.62px]' src='./src/Graphics/Tailwind.svg' />
          <img className='w-[32px] md:w-[73.12px] h-[43.71px]' src='./src/Graphics/Figma.svg' />
          <img className='w-[32px] md:w-[43.71px] h-[43.62px]' src='./src/Graphics/AdobePhotoshop.svg' />
          <img className='w-[32px] md:w-[43.71px] h-[43.62px]' src='./src/Graphics/javascript.svg' />
          <img className='w-[32px] md:w-[43.71px] h-[43.62px]' src='./src/Graphics/AdobeXD.svg' />
          <img className='w-[32px] md:w-[43.71px] h-[43.62px]' src='./src/Graphics/HTML5.svg' />
          <img className='w-[32px] md:w-[43.71px] h-[43.62px]' src='./src/Graphics/Adobeillustrator.svg' />
        </div>
      <hr className='flex justify-center items-center w-auto mx-[42px] md:w-auto mx-[135px]'></hr>
      
    </div>
  )
}

export default Skills
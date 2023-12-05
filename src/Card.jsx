import React from 'react'

function Card(props) {
  return (
    <div className='w-[285px] bg-gray-200 rounded-[10px] flex flex-col justify-center items-center md: '>
        <img className='' src={props.image} />
        <div className='mt-[10px] text-[20px] font-bold text-center'>{props.heading}</div>
        <div className='mt-[5px] text-[13px] px-[5px] font-medium text-center'>{props.description}</div>
        <div className='flex mx-[83px] gap-[19.4px] mt-[20px] mb-[32px]'>
            <img className='w-[22.03px]' src={props.icon} />
            <div className='flex justify-center items-center text-[13px] font-medium bg-amber-500 rounded-[20px] w-[77px] h-[30px]'>{props.button}</div>
        </div>
    </div>
  )
}

export default Card
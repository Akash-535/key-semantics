import React from 'react'

const CustomButton = ({ text }) => {
    return (
        <button className='pt-3 pb-[11px] px-4 border border-blue-dark rounded-full text-sm font-normal tracking-tight leading-custom-3xl text-blue-dark hover:shadow-hover duration-700 ease-linear hover:text-white hover:border-white'>{text}</button>
    )
}

export default CustomButton
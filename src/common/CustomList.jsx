import React from 'react'

const CustomList = ({ text }) => {
    return (
        <ol className='list-disc max-w-[522px] flex items-center marker:text-base'>
            <li className='text-base font-normal leading-custom-xl text-blue-dark tracking-tight max-sm:text-sm'>{text}</li>
        </ol>
    )
}

export default CustomList
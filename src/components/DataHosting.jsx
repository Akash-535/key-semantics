import React from 'react'
import Heading from '../common/Heading'
import { HEADLESS_LI_LIST, HOSTING_LI_LIST } from '../utils/helper'
import CustomList from '../common/CustomList'
import CustomButton from '../common/CustomButton'
import CommonCard from '../common/CommonCard'

const DataHosting = () => {
    return (
        <div className='container pb-[164px] max-xl:px-5 max-lg:pb-32 max-md:pb-24 max-sm:pb-14'>
            <div className='flex justify-center items-center gap-12 flex-wrap max-xl:gap-8 max-md:gap-5 max-sm:gap-3'>
                <img className="max-w-[600px] w-full object-cover" src="./assets/images/data-security-img.webp" alt="headless" />
                <div> <CommonCard Headings={'Data Security and Hosting'} list={HOSTING_LI_LIST} btn={'Get a demo'} /></div>
            </div>
        </div>
    )
}

export default DataHosting
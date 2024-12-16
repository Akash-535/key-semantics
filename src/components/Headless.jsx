import React from 'react'
import { HEADLESS_LI_LIST } from '../utils/helper'
import CommonCard from '../common/CommonCard'

const Headless = () => {
    return (
        <div className='container pb-[148px] max-xl:px-5 max-lg:pb-28 max-md:pb-20 max-sm:pb-12'>
            <div className='flex justify-center items-center flex-wrap-reverse max-xl:gap-8 max-md:gap-5 max-sm:gap-3'>
                <div className='w-6/12 max-lg:w-full'> <CommonCard Headings={'Headless federated search'} list={HEADLESS_LI_LIST} btn={'Get a demo'} /></div>
                <img className="max-w-[600px] w-full object-cover" src="./assets/images/headless-search-img.webp" alt="headless" />
            </div>
        </div>
    )
}

export default Headless
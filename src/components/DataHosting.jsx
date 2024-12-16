import React from 'react'
import Heading from '../common/Heading'
import { HEADLESS_LI_LIST, HOSTING_LI_LIST } from '../utils/helper'
import CustomList from '../common/CustomList'
import CustomButton from '../common/CustomButton'
import CommonCard from '../common/CommonCard'

const DataHosting = () => {
    return (
        <div className='container pb-[164px] max-xl:px-5 max-lg:pb-32 max-md:pb-24 max-sm:pb-14'>
            <div> <CommonCard Headings={'Data Security and Hosting'} list={HOSTING_LI_LIST} btn={'Get a demo'} myClass="flex-row-reverse" myImg='./assets/images/data-security-img.webp' /></div>
        </div>
    )
}

export default DataHosting
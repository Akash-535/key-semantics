import React from 'react'
import { HEADLESS_LI_LIST } from '../utils/helper'
import CommonCard from '../common/CommonCard'

const Headless = () => {
    return (
        <div className='container pb-[148px] max-xl:px-5 max-lg:pb-28 max-md:pb-20 max-sm:pb-12'>

            <CommonCard Headings={'Headless federated search'} list={HEADLESS_LI_LIST} btn={'Get a demo'} myImg='./assets/images/headless-search-img.webp' />

        </div>
    )
}

export default Headless
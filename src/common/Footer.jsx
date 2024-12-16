import React from 'react'

const Footer = () => {
    const currenYear = new Date().getFullYear()
    return (
        <div className='py-6 bg-black-rock'>
            <div className='container flex justify-between max-md:flex-col max-md:text-center max-md:gap-5 max-xl:px-5'>
                <p className='text-faded-blue text-xs font-normal tracking-tight'>©{currenYear} KeySemantics GmbH | Ramsenburgweg 24, 9100 Herisau, Switzerland</p>
                <a className='text-faded-blue text-xs font-normal tracking-tight' href="mailto:info@keysemantics.ch">info@keysemantics.ch</a>
            </div>
        </div>
    )
}

export default Footer
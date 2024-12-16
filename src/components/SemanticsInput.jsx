import React, { useState } from 'react'

const SemanticsInput = () => {
    const formData =
    {
        name: "",
        email: "",
        company: "",
        phone: ""
    }
    const [value, setValue] = useState(formData)
    const [error, setError] = useState(false)
    const buttonClick = (e) => {
        e.preventDefault();
        setError(true)
        if (
            value.name !== '' &&
            value.email !== '' &&
            value.company !== '' &&
            value.phone !== ''
        ) {
            setValue(formData)
            setError(false)
            console.log(value)
        }
    }
    return (
        <div className='bg-blue-dark flex flex-col justify-center items-center max-xl:px-5'>
            <div className="container relative flex flex-col items-center justify-center py-24">
                <img className='absolute top-0 left-0 max-xl:max-w-24 max-xl:left-16 max-lg:hidden' src="./assets/images/input-left-ellips.webp" alt="ellips" />
                <img className='absolute bottom-0 right-0 max-xl:max-w-24 max-xl:right-16 max-lg:hidden' src="./assets/images/input-right-ellips.webp" alt="ellips" />
                <h2 className='text-custom-3xl font-bold leading-custom-6xl text-white max-md:text-2xl max-sm:text-xl'>How does KeySemantics work?</h2>
                <p className='text-base font-normal leading-custom-xl text-white pt-2 tracking-tight text-center max-sm:text-sm'>Request a demo for your team and let us show you how KeySemantics can help your company</p>
                <form className='pt-16 flex flex-col gap-2 justify-center items-center'>
                    <div>
                        <input type="text" placeholder='Name' onChange={(e) => setValue({ ...value, name: e.target.value })} value={value.name} className='placeholder:text-sm placeholder:text-faded-blue text-sm text-faded-blue !bg-nile-blue py-4 pl-5 rounded-full !outline-none placeholder:leading-custom-3xl leading-custom-3xl w-80 tracking-tight' />
                        <p className='text-red-500 pl-3'>{error && !value.name ? "Name is required" : ""}</p>
                    </div>
                    <div>
                        <input type="email" placeholder='Email' onChange={(e) => setValue({ ...value, email: e.target.value })} value={value.email} className='placeholder:text-sm placeholder:text-faded-blue text-sm text-faded-blue !bg-nile-blue py-4 pl-5 rounded-full !outline-none placeholder:leading-custom-3xl leading-custom-3xl w-80 tracking-tight' />
                        <p className='text-red-500 pl-3'>{error && !value.email ? "E-mail is required" : ""}</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Company' onChange={(e) => setValue({ ...value, company: e.target.value })} value={value.company} className='placeholder:text-sm placeholder:text-faded-blue text-sm text-faded-blue !bg-nile-blue py-4 pl-5 rounded-full !outline-none placeholder:leading-custom-3xl leading-custom-3xl w-80 tracking-tight' />
                        <p className='text-red-500 pl-3'>{error && !value.company ? "Company is required" : ""}</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Phone (optional)' onChange={(e) => setValue({ ...value, phone: e.target.value })} value={value.phone} className='placeholder:text-sm placeholder:text-faded-blue text-sm text-faded-blue !bg-nile-blue py-4 pl-5 rounded-full !outline-none placeholder:leading-custom-3xl leading-custom-3xl w-80 tracking-tight' />
                    </div>
                    <p className='text-custom-xs text-faded-blue pt-2 pb-4 font-normal tracking-tight max-lg:text-center'>By submitting my contact information I agree to the KeySemantics Privacy Policy</p>
                    <button onClick={buttonClick} className='pt-4 pb-3.5 px-8 border border-transparent rounded-full text-sm font-medium tracking-tight leading-custom-3xl text-white bg-fountain-blue hover:shadow-hover-2 duration-700 ease-linear hover:text-fountain-blue hover:border-fountain-blue max-lg:py-4 max-lg:px-6 max-sm:py-3 max-sm:px-4'>Request a demo</button>
                </form>
            </div>
        </div>
    )
}

export default SemanticsInput
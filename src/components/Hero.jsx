import React from 'react';
import CustomButton from '../common/CustomButton';
const Hero = () => {
    return (
        <div className='bg-hero-bg bg-cover bg-center bg-no-repeat lg:min-h-[900px] max-xl:px-3 max-lg:px-4 max-md:px-5'>
            <div className='container  items-center  flex justify-between mx-auto pt-12 max-lg:pt-10 max-md:pt-8 max-sm:pt-6'>
                <a href="/">
                    <img className='max-w-[248px] max-md:max-w-[200px] max-sm:max-w-[160px] w-full' src="./assets/images/logo.webp" alt="logo" />
                </a>
                <CustomButton text="Request a demo" />
            </div>
            <div className='lg:pt-[198px] flex flex-col justify-center items-center max-lg:py-12 max-md:py-10 '>
                <h1 className='text-custom-6xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl font-bold text-center max-w-[635px] mx-auto text-blue-dark leading-custom-lg'>AI-Powered Searchas a Service</h1>
                <p className='pt-10 pb-12 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base leading-custom-2xl text-blue-dark text-center font-medium max-lg:py-8 max-md:py-5 max-sm:py-3'>Unlock your content with KeySemantics.</p>
                <button className='pt-5 pb-[18px] px-8 border border-transparent rounded-full text-base font-medium tracking-tight leading-custom-3xl text-white bg-blue-dark hover:shadow-hover-2 duration-700 ease-linear hover:text-blue-dark hover:border-blue-dark max-lg:py-4 max-lg:px-6 max-sm:py-3 max-sm:px-4'>Get started</button>

            </div>
        </div>
    );
};

export default Hero;

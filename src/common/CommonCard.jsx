import React from 'react'

const CommonCard = ({ Headings, list, btn, myImg, myClass }) => {
    return (
        <>
            <div className={` ${myClass} flex justify-center items-center flex-wrap-reverse gap-12 max-xl:gap-8 max-md:gap-5 max-sm:gap-3`}>
                <div className="max-w-[552px] flex flex-col justify-center mx-auto">
                    <h2 className='leading-custom-6xl text-blue-dark text-custom-3xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold' >{Headings}</h2>
                    <div className="ml-6 max-w-[552px] mx-auto">
                        <ul className="list-disc text-blue-dark flex gap-2 flex-col">
                            {list.map((item, i) => (
                                <li key={i} className="text-base leading-custom-4xl max-sm:text-sm">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 max-md:mt-4">
                        <button className='pt-3 pb-[11px] px-4 border border-blue-dark rounded-full text-sm font-normal tracking-tight leading-custom-3xl text-blue-dark hover:shadow-hover duration-700 ease-linear hover:text-white hover:border-white'>{btn}</button>
                    </div>

                </div>

                <img className='max-w-[600px] w-full' src={myImg} alt="" />
            </div>
        </>
    )
}

export default CommonCard
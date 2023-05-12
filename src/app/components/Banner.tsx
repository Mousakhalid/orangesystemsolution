import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Banner = () => {
    return (
        <div className='flex md:flex-row flex-col '>
            <div className='md:p-24 p-2'>
                <h1 className='text-gray-700 font-bold text-2xl md:mt-2 mt-10 '>OUR SERVICE</h1>
                <h1 className='text-orange-600 font-semibold text-4xl md:mt-5 mt-2'>Seamless Integration For
                    <br />   Maximum Efficiency.</h1>
                <p className='text-gray-900 font-xl my-5'>Orange System Solutions: Business,
                    Web, Social, Lead Generation leaders with expert teams.</p>
                <Button />
            </div>
            <div className='md:p-5 p-3 items-center'>
                <Image src='/images/hero-removebg-preview.png'
                    alt='Hero Section' width={400} height={400} />
            </div>
        </div>
    )
}

export default Banner

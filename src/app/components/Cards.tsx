import Image from 'next/image'
import React from 'react'

const Cards = () => {
    return ( 
        <div className='md:mx-7 mx-12'>
            <div className='flex md:flex-row flex-col'>
                <div className='bg-gradient-to-r from-pink-500 to-orange-500  md:w-3/12 w-full  p-5  rounded-lg justify-center flex flex-col md:mr-5 mr-0'>
                    <h1 className='text-white font-bold text-xl pt-3 mt-4'>OUR SERVICE</h1>
                    <p className='text-gray-100 font-extrabold text-3xl pt-5 mb-16'>We're here to increase your business.</p>
                </div>
                <div className='bg-gradient-to-r from-pink-500 to-orange-500 md:w-3/12 w-full  p-5 rounded-lg justify-center flex flex-col md:mt-0 mt-5 md:mr-5 mr-0'>
                    <Image src='/images/web.png' alt='Digi' height={90} width={90} />
                    <p className='text-gray-100 font-extrabold text-3xl pt-5 mb-16'>We provide expert web development services.</p>
                </div>
                <div className='md:mt-0 mt-5 bg-gradient-to-r from-pink-500 to-orange-500 md:w-3/12 w-full  p-5 rounded-lg justify-center flex flex-col md:mr-5 mr-0'>
                    <Image src='/images/digi.png' alt='Digi' height={90} width={90} />
                    <p className='text-gray-100 font-extrabold text-3xl pt-5 mb-16'>We offer effective digital marketing solutions.</p>
                </div>
                <div className='bg-gradient-to-r from-pink-500 to-orange-500 md:w-3/12 w-full  p-5 rounded-lg justify-center flex flex-col md:mt-0 mt-5 md:mr-5 mr-0'>
                    <Image src='/images/lead.png' alt='Digi' height={90} width={90} />
                    <p className='text-gray-100 font-extrabold text-3xl pt-5 mb-16'>We generate leads that convert into customers.</p>
                </div>
            </div>
        </div>
    )
}

export default Cards

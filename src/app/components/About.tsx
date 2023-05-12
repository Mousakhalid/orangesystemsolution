import Image from 'next/image'
import React from 'react'
import Button from './Button'

const About = () => {
    return (
        <div className='flex md:flex-row flex-col p-8 my-5'>
            <Image src='/images/about.jpg' alt='about Image' width={440} height={440} />
            <div className='md:w-3/6 w-full md:ml-12'>
                <h1 className='text-gray-600 text-2xl font-semibold md:mt-0 mt-4'>About Us</h1>
                <h2 className='text-5xl font-bold text-rose-600'>Our Company is Here to
                    Help You.
                </h2>
                <p className='my-8 text-gray-700 text-xl text-justify'>Orange System Solutions is a services-based
                    software company that offers a range of digital
                    solutions to clients looking to enhance their online
                    presence. With a team of skilled professionals, Orange
                    System Solutions specializes in web development, social
                    media marketing (SMM), search engine optimization (SEO),
                    and lead generation</p>
                <Button />
            </div>
        </div>
    )
}

export default About

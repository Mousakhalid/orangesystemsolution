import React from 'react'

const Ready = () => {
    return (
        <div className='m-12 rounded-xl bg-gradient-to-r from-orange-500 to-rose-700 items-center justify-center h-96'>
            <div className='text-white text-center py-14'>
                <h1 className='md:text-3xl text-2xl font-bold'>ARE YOU READY FOR</h1>
                <h2 className='md:text-4xl text-3xl font-semibold'>Lets Get Started
                    Your Project</h2>
            </div>
            <div className='flex w-48 m-auto items-center content-center'>
                <button className='py-4 px-7 justify-center content-center text-white rounded-full bg-gradient-to-r from-cyan-500 rose to-pink-600 hover:bg-orange-700 active:ring-1 md:w-36 w-full'>Start Now</button>
            </div>
        </div>
    )
}

export default Ready

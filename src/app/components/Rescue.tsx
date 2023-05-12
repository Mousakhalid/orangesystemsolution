import React from 'react';

const Rescue = () => {
    return (
        <div className='bg-gradient-to-r from-pink-500 to-orange-500 md:p-24 p-8 md:m-24 m-14 rounded-md'>
            <div className='grid md:grid-cols-[80%,auto] gap-8 grid-cols-1'>
                <div className='gap-x-2'>
                    <h1 className='font-bold text-3xl text-gray-100'>Rescue your company’s growth!</h1>
                    <p className='text-white'>Let us know about your business plans on
                        an introductory call, and we’ll lead the matching process.</p>
                </div>
                <button className='bg-gray-600 text-white font-bold rounded-full p-2 hover:border- hover:bg-gradient-to-r from-purple-500 to-pink-500'>Hire Now</button>
            </div>
        </div>
    )
}

export default Rescue

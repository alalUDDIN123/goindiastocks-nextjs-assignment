import React, { useEffect, useState } from 'react'
import market from '@/data/MarketData'
import Image from 'next/image'

const MarketStore = () => {


    return (
        <div className='ml-[20px] max-[425px]:ml-0 max-[425px]:pl-2 w-full mb-9'>
            <h1 className='text-[17px] font-bold font-sans uppercase text-red-500 ml-6  mt-2' >Market Stories</h1>

            <div className={`mt-[41.5px] px-6 __marketStyle w-full h-[600px] max-[425px]:h-auto overflow-y-auto max-[425px]:overflow-y-visible --marketScroll`} >
                {market?.map((item) => (
                    <div key={item.id} className='relative w-full h-60 max-h-[50]'>
                        <Image
                            src={item.image}
                            width={100}
                            height={250}
                            priority={true}
                            alt='postImage'
                            className='w-full h-full rounded-lg'
                        />
                        <div
                            className='absolute bottom-0 left-0 w-full px-5 py-4 bg-[rgba(0,0,0,0.4)] rounded-b-lg'
                        >
                            <p className='text-white text-sm text-justify'>
                                {item.Text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MarketStore
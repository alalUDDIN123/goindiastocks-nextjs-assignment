import React from 'react'
import { CiSearch } from "react-icons/ci"
import { postData } from "../data/PostData";
import UserPost from './UserPost'


const Feed = () => {
    return (
        <div className=' w-[670px] min-w-[670px] max-[425px]:w-[100%] max-[425px]:min-w-[100%]'>
            <h1 className='text-[17px] font-bold font-sans uppercase text-red-500 ml-6 mt-2' >Descussion fourm</h1>


            {/* filter section  */}
            <div className='mt-2 ml-[75px] max-[425px]:ml-6'>
                <p className="text-lg font-bold mb-2">Filters</p>

                <div className='flex py-[10px]  justify-around px-2 rounded-md shadow-[0_2px_6px_rgba(0,0,0,0.3)]'>
                    {/* all filters buttons */}
                    <div className='flex justify-between items-center gap-3 max-[425px]:gap-1 max-[425px]:text-sm'>
                        <button className='bg-red-500 hover:bg-blue-700 text-white w-24 py-[3px] rounded-[50px] font-semibold'>
                            Sector 1
                        </button>
                        <button className='bg-blue-500 hover:bg-green-700 text-white w-24 py-[3px] rounded-[50px] font-semibold'>
                            Sector 2
                        </button>
                        <button className='bg-yellow-500 hover:bg-red-700 text-white w-24 py-[3px] rounded-[50px] font-semibold'>
                            Sector 3
                        </button>

                        <div className='flex items-center justify-between border bg-gray-200 border-t-2 border-gray-300 rounded-full ml-1 py-1'>
                            <div>
                                <CiSearch className='text-black text-[22px] ml-2' />
                            </div>
                            <div className="flex-grow">
                                <input type="text"
                                    className='border-none outline-none bg-gray-200 text-black px-2 py-1 text-base w-full h-8 max-[425px]:h-6 rounded-[50px]'
                                    placeholder='Search here...' />
                            </div>
                        </div>
                    </div>



                </div>
            </div>


            {/* posts */}
            <div className='my-6 p-3 flex flex-col gap-3.5 overflow-y-auto max-[425px]:overflow-y-visible ml-[62px] max-[425px]:ml-3  xl:h-[500px] --postScroll' >
                {postData?.map((item) => <UserPost key={item.id} {...item} />)}
            </div>



        </div>
    )
}

export default Feed
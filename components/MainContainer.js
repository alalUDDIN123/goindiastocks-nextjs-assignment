import React from 'react'
import SideBar from './SideBar'
import Feed from './Feed'
import MarketStore from './MarketStore'

const MainContainer = () => {
    return (
        <div className='flex max-[425px]:flex-col w-full m-0 p-0'>
            <SideBar />
            <Feed />
            <MarketStore />
        </div>
    )
}
export default MainContainer
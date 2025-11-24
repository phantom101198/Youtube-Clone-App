import React from 'react'
import MenuBar from './MenuBar'
import VideoContainer from './VideoContainer'

const MainBody = () => {
  return (
    <div className='flex-1 flex min-h-0'>
        <MenuBar />
        <VideoContainer />
    </div>
  )
}

export default MainBody
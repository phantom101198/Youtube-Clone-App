import React from 'react'
import MainBody from './components/MainBody'
import UpHeader from './components/UpHeader'
import { Outlet } from 'react-router-dom'
import VideoPage from './components/VideoPage'

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <UpHeader />
      <Outlet />
      {/* 
          mainbody
            -MenuBar
            -VideoContainer
          videoPage
            -MenuBar
            -VideoPage
       */}
      {/* <MainBody /> */}
      {/* <VideoPage /> */}
    </div>
  )
}

export default App
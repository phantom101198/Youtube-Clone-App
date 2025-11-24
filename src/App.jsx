import React from 'react'
import MainBody from './components/MainBody'
import UpHeader from './components/UpHeader'

const App = () => {
  return (
    <div className='flex flex-col h-screen'>
      <UpHeader />
      <MainBody />
    </div>
  )
}

export default App
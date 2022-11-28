import React from 'react'
import './App.css'
import VideoFrame from './components/VideoFrame'

function App() {

  return (
    <div className="app">
      <div className="snap__container">
        <VideoFrame />
        <VideoFrame />
      </div>
    </div>
  )
}

export default App

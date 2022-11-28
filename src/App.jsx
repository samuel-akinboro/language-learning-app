import React from 'react'
import './App.css'
import AllQuestionFrame from './components/AllQuestionFrame'
import VideoFrame from './components/VideoFrame'

function App() {

  return (
    <div className="app">
      <div className="snap__container">
        <VideoFrame />
        <AllQuestionFrame />
      </div>
    </div>
  )
}

export default App

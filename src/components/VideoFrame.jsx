import React from 'react'
import './VideoFrame.css'

const VideoFrame = () => {
  return (
    <div className='video__frame'>
      <iframe 
        className='iframe'
        src="https://www.youtube.com/embed/G6a-h0Br5YA" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      >     
      </iframe>
    </div>
  )
}

export default VideoFrame
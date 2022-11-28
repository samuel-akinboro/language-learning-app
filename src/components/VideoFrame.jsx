import React from 'react'
import './VideoFrame.css'
import {
  ChevronDoubleDownIcon
} from '@heroicons/react/24/solid'

const VideoFrame = () => {
  return (
    <div className='video__frame'>
      <iframe 
        className='iframe'
        src="https://www.youtube.com/embed/SLmEdQ1pcAM?controls=0&autoplay=1&loop=1" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
      >     
      </iframe>
      <div className="scroll__down__indicator">
        <ChevronDoubleDownIcon className='scroll__down__indicator__icon' />
      </div>
    </div>
  )
}

export default VideoFrame
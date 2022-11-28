import React from 'react'
import './QuestionFrame.css'

const QuestionFrame = () => {
  return (
    <div className='question__frame'>
      <div className="question__frame__container">
        <div className="question__details">
          <div className="option top">
            <p>Bear</p>
          </div>
          <div className="option right">
            <p>Cat</p>
          </div>
          <div className="option bottom">
            <p>Cow</p>
          </div>
          <div className="option left">
            <p>Dog</p>
          </div>
          <div className="draggable">
            <p>
              OSO
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionFrame
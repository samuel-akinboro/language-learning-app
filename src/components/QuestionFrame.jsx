import React, { useRef } from 'react'
import './QuestionFrame.css'
import { motion } from 'framer-motion'

const QuestionFrame = () => {
  const constraintsRef = useRef(null)

  return (
    <div className='question__frame'>
      <div className="question__frame__container">
        <motion.div className="question__details" ref={constraintsRef}>
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
          <motion.div 
            drag 
            className="draggable"
            dragElastic={0} 
            // dragConstraints={constraintsRef}
            dragConstraints={{ top: -130, left: -130, right: -50, bottom: -50 }}
            // dragSnapToOrigin={true}
          >
            <p>
              OSO
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default QuestionFrame
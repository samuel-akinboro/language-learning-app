import React from 'react'
import ProgressBar from './ProgressBar'
import './AllQuestionFrame.css'
import QuestionFrame from './QuestionFrame'

const AllQuestionFrame = () => {
  return (
    <div className='all__question__frame'>
      <ProgressBar />
      <QuestionFrame />
    </div>
  )
}

export default AllQuestionFrame
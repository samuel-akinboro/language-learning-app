import React from 'react'
import './ProgressBar.css'
import {
  ChevronRightIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/solid'

const ProgressBar = () => {
  return (
    <div className='progress__header'>
      <div className="progress__header__container">
        <div className="left">
          <h3 className='question__title'>Question 7</h3>
          <div className="progress__container">
            <div className="progress__bar">
              <div className="progress__bar__indicator"></div>
              <div className="progress__bar__indicator__status">
                <p>7</p>
              </div>
            </div>
            <div className="question__count">
              <p>7 / 10</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav__btn">
            <ChevronLeftIcon className='nav__btn__icon' />
          </div>
          <div className="nav__btn">
            <ChevronRightIcon className='nav__btn__icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
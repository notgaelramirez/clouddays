import React, { useRef } from 'react'
import './location.css'
import { useNavigate } from 'react-router-dom'

const GetLocationScreen = () => {

  const navigate = useNavigate()
  const btnClick = () =>{
    navigate('/weather')
  }

  return (
    <div className='location'>
      <h2 className='location-welcome'>
        Welcome to the best app for weather information
      </h2>
      <div>
        <button onClick={btnClick} className='location-btn'>Get Location</button>
      </div>
    </div>
  )
}

export default GetLocationScreen
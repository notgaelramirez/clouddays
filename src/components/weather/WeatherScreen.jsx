import React, { useEffect } from 'react'
import './weather.css'

const WeatherScreen = () => {

  function success(pos) {
    let crd = pos.coords

    console.log(crd.latitude)
    console.log(crd.longitude)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  

  return (
    <div className='weather'>
      Weather
    </div>
  )
}

export default WeatherScreen
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ForecastScreen from '../forecast/ForecastScreen'
import './weather.css'

const WeatherScreen = () => {

  const [lat, setLatitude] = useState()
  const [lon, setLongitude] = useState()
  const [data, setData] = useState()

  console.log(lat, lon)
  const getLocation = () =>{
    function success(pos) {
      let crd = pos.coords
      
      setLatitude(crd.latitude)
      setLongitude(crd.longitude)
    }
    
    navigator.geolocation.getCurrentPosition(success)
  }
  
  getLocation()
  
  const getData = () =>{
    const key = 'd09f3490b20b989fab930bf1628b86e0'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

    axios.get(URL)
      .then(res => setData(res.data))
  }

  useEffect(() => {
    getData()
  }, [])
  
  if (data) {
  return (
    <div className='weather'>
      <div className="weather-container">
        <div className='weather-city'>
          <p>{data?.name}</p>
        </div>

        <div className='weather-info'>
          <div className='weatther-temp'>
            <p>{data?.main.temp}</p>
          </div>
          <div className='weather-humi'>
            <p>{data?.main.humidity}</p>
          </div>
          <div className='weather-rain'>
            <p>{data?.clouds.all}</p>
          </div>
          <div className='weather-desc'>
            <p>{data?.weather[0].description}</p>
          </div>
        </div>
      </div>

      <ForecastScreen />
    </div>
  )
  }
}

export default WeatherScreen
import React from 'react'
import './forecast.css'

const ForecastScreen = () => {
  return (
    <div className='forecast'>
      <div className='forecast-title'>
        <p>Forecast</p>
      </div>

      <div className="forecast-days">
        <div className="forecast-day">
          <p>day</p>
        </div>
        <div className="forecast-day">
          <p>day</p>
        </div>
        <div className="forecast-day">
          <p>day</p>
        </div>
        <div className="forecast-day">
          <p>day</p>
        </div>
      </div>
    </div>
  )
}

export default ForecastScreen
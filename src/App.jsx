import './App.css'
import GetLocationScreen from './components/location/GetLocationScreen'
import WeatherScreen from './components/weather/WeatherScreen'
import mountain from './assets/mountain.png'

function App() {
  return (
    <div className='general'>
      <div>
        <header className='header'>
          <h1 className='app-title'>CLOUD DAYS</h1>
        </header>

        <div className="App">
          <GetLocationScreen />
        </div>
      </div>

      <img className='mountain' src={mountain} alt="" />
    </div>
  )
}

export default App

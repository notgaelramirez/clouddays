import './App.css'
import GetLocationScreen from './components/location/GetLocationScreen'
import WeatherScreen from './components/weather/WeatherScreen'
import mountain from './assets/mountain.png'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'

function App() {
  return (
    <div className='general'>
      <div>
        <header className='header'>
          <h1 className='app-title'>CLOUD DAYS</h1>
        </header>

        <Routes>
          <Route path='/' element={<GetLocationScreen />}/>

          <Route element={<ProtectedRoutes isLocation={true}/>}>
            <Route path='/weather' element={<WeatherScreen />}/>
          </Route>
        </Routes>
      </div>

      <img className='mountain' src={mountain} alt="" />
    </div>
  )
}

export default App

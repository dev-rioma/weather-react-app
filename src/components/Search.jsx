import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import React, { useState } from 'react'
import Temperature from './Temperature'
import './Search.css'
import LoadingIcons from 'react-loading-icons';


const Search = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultData)

  const handleResponse = (response) => {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temp: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      weather: response.data.weather[0].main,
      date: new Date(response.data.dt *1000),
      icon: response.data.weather[0].icon,
    })
  }
  
  const searchCity = () => {
    const API_KEY = '7722f69b9baf23f3d23cc11b09fcb6f8'
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    axios.get(API_URL).then(handleResponse)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchCity()
  }

  const handleChangeCity = (e) =>{
    setCity(e.target.value)
  }

  if (weatherData.ready) {
    return (
      <div className='container-search d-flex flex-column justify-content-center text-center '>
        <form className='search-form-city d-flex justify-content-center my-4' onSubmit={handleSubmit}>
          <input 
            type="text" 
            className='search-form-input-city'
            placeholder='type a city'
            aria-label='Type a city'
            onChange={handleChangeCity} 
          />
          <button className='search-form-submit-city btn btn-primary' type='submit'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
          <Temperature 
            data={weatherData} 
            coord={weatherData.coord} />
      </div>
    )
} else {
  searchCity();
  return(
    <div className="container">
        <div className="row">
          <div className="col" align="center">
            <LoadingIcons.Rings viewBox="0 0 255 255" strokeWidth={200} speed={0.60} />
          </div>
        </div>
      </div>
    ) 
  }
}
export default Search


import React, { useState } from 'react'
import Icon from './Icon'
import './Temperature.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import InitialData from './InitialData';


const Temperature = (props) => {
  const [unit, setUnit] = useState('celcius')
  const handleFarenheit = (e) =>{
    e.preventDefault()
    setUnit('farenheit')
  }
  const handleCelsius = (e) => {
    e.preventDefault()
    setUnit('celcius')
  }

  function farenheit() {
    return (props.data.temp * 9/5) + 32
  }

  if (unit === 'celcius') {
    return (
      <div className='container-temp'>
        <div className='container text-center'>
          <div className="row align-items-center">
            <div className='container-data-temp col text-sm-start text-center ms-sm-4'>
              <h2 id='title-city'>{props.data.city}</h2>
              <h5>
                <InitialData date={props.data.date} />
              </h5>
              <h2 className='temp'>
                {Math.round(props.data.temp)}°
              </h2>
              <div className='container-btns-temp'>
                <button 
                  type='submit'
                  className='btn btn-primary'
                >
                  °C
                </button>
                <button
                className='btn btn-primary'
                type='submit'
                onClick={handleFarenheit}
                >
                  °F
                </button>
              </div>
            </div>
            <div className='col'>
            <div className='mb-4'>
              <h2 className='title-weather'>
                {props.data.weather}
              </h2>
            </div>
              <Icon
                defaultIcon={props.data.icon}
                size={250}
              />
            </div>
          </div>
        </div>
        
        
        <div className='container-temp-bot d-flex flex-row'>
          <h3 className='title-humidity'>
            <FontAwesomeIcon 
              icon={faTint}
            />
            {props.data.humidity}%
          </h3>

          <h3 className='title-wind'>
            <FontAwesomeIcon 
              icon={faWind}
            />
            {Math.round(props.data.wind)} km/h
          </h3>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container-temp'>
        <div className='container text-center'>
          <div className="row align-items-center">
            <div className='container-data-temp col text-sm-start text-center ms-sm-4'>
              <h2 id='title-city'>{props.data.city}</h2>
              <h5>
                <InitialData date={props.data.date} />
              </h5>
              <h2 className='temp'>
                {Math.round(farenheit())}°
              </h2>
              <div className='container-btns-temp'>
                <button 
                  type='submit'
                  className='btn btn-primary'
                  onClick={handleCelsius}
                >
                  °C
                </button>
                <button
                className='btn btn-primary'
                type='submit'
                
                >
                  °F
                </button>
              </div>
            </div>
            <div className='col'>
            <div className='mb-4'>
              <h2 className='title-weather'>
                {props.data.weather}
              </h2>
            </div>
              <Icon
                defaultIcon={props.data.icon}
                size={250}
              />
            </div>
          </div>
        </div>
        
        
        <div className='container-temp-bot d-flex flex-row'>
          <h3 className='title-humidity'>
            <FontAwesomeIcon 
              icon={faTint}
            />
            {props.data.humidity}%
          </h3>

          <h3 className='title-wind'>
            <FontAwesomeIcon 
              icon={faWind}
            />
            {Math.round(props.data.wind)} km/h
          </h3>
        </div>
      </div>
      
    )
  }

  
}

export default Temperature
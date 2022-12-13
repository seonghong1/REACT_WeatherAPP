import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";
import './WeatherBox.scss'
//react-loader-spinner 사용
const WeatherBox = ({ weather, loading }) => {
  //weather?.name -weather?가 있을때만 출력
  return (
    <div className='weather_box'>
      <div className="loading_wrap" style={{
        position:'absolute',
        top:'calc(50% - 60px)',
        left:'calc(50% - 30px)'
      }}>
        {loading ? <FadeLoader color='red'/> : ""}
      </div>
      {!loading? <h1 className='city'>{weather?.name}</h1>:''}
      {!loading?<h2 className='temp'>온도 : {weather?.main.temp}℃ / 습도 : {weather?.main.humidity}%</h2> : ''}
      {!loading?<h3 className='description'>{weather?.weather[0].description}</h3> : ''}
    </div>
  )
}

export default WeatherBox
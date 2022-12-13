import React from 'react'
import { Button } from 'react-bootstrap';
import './WeatherButton.scss'

// app.jsx에서 버튼의 도시들을 배열로 만들어준걸 props로 갖고옴
//onClick={()=>handleCityChange('')} 또는 onClick={()=> setCity('')}로 현재 위치 날씨 재출력
const WeatherButton = ({citys, setCity, handleCityChange, selectedCity}) => {
  return (
    <div className='button_box'>        
    <h2 className="title">CITY</h2>        
        <Button variant={selectedCity === ''? "primary":"outline-primary"} onClick={()=>handleCityChange('')}>Current Location</Button>
        {citys.map((item, index)=>{
          return <Button 
          variant={selectedCity === item? 'primary': "outline-primary"} 
          key={index}
          onClick={()=>setCity(item)}
          >
            {item}</Button>
        })}
    </div>
  )
}

export default WeatherButton
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';


/*
  selectedCity={city} 의 정보를 button 컴포넌트로 전달해준다
*/

function App() {
    const [weather, setWeather] = useState(null)// 받아온 날씨정보(data)를 저장
    //버튼에서 선택한 도시
    const [city, setCity] = useState('')
    //버튼의 택스트가 될 요소를 배열로 만들어줌
    const citys = ["Amsterdam", "Athens", "Baghdad", "Bangkok", "Barcelona", "Beijing", "Belgrade", "Berlin", "Bogota", "Bratislava", "Brussels", "Bucharest", "Budapest", "Cairo", "Cape Town", "Caracas", "Chicago", "Copenhagen", "Dubai", "Frankfurt", "Hanoi", "Hong Kong", "Istanbul", "Jerusalem", "Kuala Lumpur", "Lisbon", "London", "Los Angeles", "Luxembourg", "Madrid", "Manila", "Mexico City", "Montreal", "Moscow","New York","New Delhi","Ottawa","Paris","Prague","Rio de Janeiro","San Francisco","Seoul","Shanghai","Sydney","Tokyo","Toronto","Venice","Washington, D.C."]
//로딩시 회전
    const [loading, setLoading] = useState(false)

    
const getCurrentLocation = ()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    getWeatherByCurrentLocation(lat, lon)
  });
}

const getWeatherByCurrentLocation = async (lat, lon)=>{
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=196daaaf32e593d6d34bef920e72034f&units=metric`
   //fetch함수로 불러온 데이터를 바로 사용할 수 없음, 변환을 해줘야됨, JSON() 
  let response = await fetch(url); // fetcg(url,option)
  setLoading(true)//fetch 완료 전 로딩 작동
  //객체형태로 변환
  let data = await response.json();
  //weatherbox로 전달되는 props
  setWeather(data)
  setLoading(false) // 로딩 끝
}

// 조건문을 사용해 useEffect를 하나로 묶어줌 -> error해결
useEffect(()=>{
  if(city === ""){
    getCurrentLocation()
  }else{
    getWeatherByCity()
  }
}, [city])


//current weather클릭시 현재날씨 재출력
const handleCityChange = (city)=>{
  if(city === 'current'){
    setCity('')
  }else{
    setCity(city)
  }
}


//선택되 도시의 날씨 정보를 갖고오는 함수, 위도 경도값이 아닌 cityname으로 조회함
//city의 값이 바뀔때 실행
const getWeatherByCity = async () => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=196daaaf32e593d6d34bef920e72034f&units=metric`
  let response = await fetch(url);
  setLoading(true)
  let data = await response.json();
  setWeather(data)
  setLoading(false)
}


  return (
    <>
   
    <div className='container'>
      <WeatherBox weather={weather} loading={loading}/>                                                     
      <WeatherButton citys={citys} setCity={setCity} handleCityChange={handleCityChange} selectedCity={city}/>
    </div>
    </>
  
  );
}

export default App;

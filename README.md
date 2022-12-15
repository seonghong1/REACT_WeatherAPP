# 🌞Weather APP🌞

## 사용기술
- ### weather API 
- ### useEffect
- ### useState

# 간단한 설명
##### weather API를 fetch를 이용하여 갖고오고, useState를 사용해 값을 저장했습니다.
##### 도시 버튼을 클릭시 도시명을 이용해 api를 다시 불러와주며,
##### 버튼을 클릭하지 않은, 맨처음 상태에서는 현재 위도, 경도 값을 
##### position.coords.latitude / position.coords.longitude
##### 구해서 컴포넌트에 props로 전달해준 뒤 화면에 노출시켰습니다.
##### 또한 데이터가 respone(await response.json) 되기 이전에 로딩애니메이션을 노출시켜
##### useState를 사용해 boolean값을 넣어주고 true일땐 로딩애니메이션을, 데이터가 불러와진 뒤에는 
##### false로 값을 변경하여 구현했습니다.

# 느낀점, 알게된점, 나의 생각
##### react에서 api데이터를 갖고오는 방법은 fetch를 사용해 달라진점은 없지만
##### 갖고온 데이터 값을 useState에 저장하고, 자유롭게 사용하는점에서 다시한번 
##### 유용한 라이브러리라고 생각이 들었다.
##### 데이터가 객체 형태로 변환되기 이전에 / let data = await response.json()
##### 로딩애니메이션의 boolean값을 true, 변환된 이후에는 false를 넣어주어 구현하였다.
##### OpenWeatherApp에서 다양한 날씨 관련 api들이 있어
##### 개인 토이프로젝트 다양한 형태로 사용해보고싶다.





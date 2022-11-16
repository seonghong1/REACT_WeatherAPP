import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodeList/TodoList';
import Header from './components/Header/Header';
import { Invert } from './Context/InvertContext';




const filters = ['ALL', 'ACTIVE', 'COMPLETED']
function App() {
  //초기값은 필터 배열의 첫번째 값으로 시작(all)
  const [filter, setFilter] = useState([filters[0]])
  const [dark, setDark] = useState(false)


  return (
    <Invert.Provider value={{dark, setDark}}>
      <div className='top_area'
              style={{
                backgroundImage: dark? 'url(../assets/moon2.jpg)':'',
                border: dark? '1px solid white':'',  
              }}>
              
        <Header
          filters={filters}
          filter={filter}
          onFilterChange={setFilter}
        />
        <TodoList filter={filter} />
      </div>
      <div className="darkmodeBg"
          style={{
            backgroundColor: dark? 'black':'',
          }}></div>

    </Invert.Provider>
  );
}

export default App;

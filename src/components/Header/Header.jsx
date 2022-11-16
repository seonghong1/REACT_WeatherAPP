import React, { useContext, useEffect } from 'react'
import style from './Header.module.css'
import { Invert } from '../../Context/InvertContext'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

const Header = ({ filters, filter, onFilterChange }) => {
const {dark, setDark} = useContext(Invert)
const invert = ()=>{
    setDark(!dark)
    updateDarkMode(!dark);
}
//제일 처음에 로딩될때 다크모드인지 아닌지 판단하고 그대로 초기값 설정
// - >(새로고침을 해도 낮 상태인 기본값으로 변경안됨)
useEffect(()=>{
    const   isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            //다크모드 상태를 변수 isDark에 넣어줌
            setDark(isDark)
            updateDarkMode(isDark)
})

function updateDarkMode(darkmode){
    if(darkmode){
         document.documentElement.classList.add('dark')
         localStorage.theme = 'dark' //업데이트 될때마다 로컬 스토리지에 'dark'라는 값을 저장한다
    } else{
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
}

    return (
        <header className={style.header}>
            <h1 style={{}}>TODO LIST</h1>
            {/* 클라스 이름을 2개 이상 넣을때 표현방법
            className={`${style.filter} ${style.selectde}`}*/}
            <ul className={style.filters}>
                {filters.map((value, index) => {
                    return <li key={index}>
                        <button 
                        className={`${filter[0] === value? style.selected:""} ${filter === value? style.selected:""}`}
                        onClick={() => onFilterChange(value)}>{value}</button>
                    </li>
                })}
            </ul>
            <button onClick={invert} className={style.invBtn}>{!dark? <BsFillMoonStarsFill className={style.rotate}/>:<BsFillSunFill className={style.rotate} />}</button>
        </header>
    )
}

export default Header
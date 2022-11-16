import React from 'react'
//yarn add react-icons 설치 - react icons사이트
//아이콘 이름 앞에 2글자를 from / 00에 넣어준다
import { FaRegTrashAlt } from 'react-icons/fa';

import style from './Todo.module.css'
/*
  내가 입력한 item.text를 화면에 노출되는 값으로 사용. 
  체크박스와 button을 추가함.(기능구현x ) 
*/
const Todo = ({ todo, onUpdate, onDelect }) => {
  const { text, status, id } = todo;
  //props로 받아온 함수가 아니라 Todo컴포너트에서 이루어지는 함수
  const handleChange = (e) => {
    const status = e.target.checked ? 'COMPLETED' : 'ACTIVE'
    onUpdate({ ...todo, status })
  }
  const handDelect = () => {
    return onDelect(todo)
  }
  
  return (
    // 라벨을 클릭시 제일 첫번째 input의 checked문제 해결
    // 해당 todo의 id값을 input의 id값으로, label의 for값으로 전달
    <li className={style.todo_item}>
      <input
        type='checkbox'
        id={id}
        checked={status === 'COMPLETED'}
        onChange={handleChange} />
      <label htmlFor={id}
        style={{
         
        }}
      >{text}</label>
      <span>
        <button onClick={handDelect}><FaRegTrashAlt /></button>
      </span>
    </li>
  )
}

export default Todo
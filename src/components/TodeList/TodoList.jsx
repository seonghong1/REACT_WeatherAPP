import React, { useEffect, useState } from 'react'
import AddTodo from '../AddTodo/AddTodo'
import Todo from '../Todo/Todo'
import style from './TodoList.module.css'
/*
   todo아이템의 상태를 저장해서 다시 열었을때도 남아있게 만들기
*/

const TodoList = ({filter}) => {
   //todos를 로컬스토리지로부터 갖고오는 함수
  // 로컬스토리지에 저장되어있는 아이템을 갖고온다.
  const [todos, setTodos] = useState(readRodosFROMlOCALsTORAGE())
  //todos가 업데이트 될때 값을 localStorage에 저장
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
    console.log('setitem', localStorage.setItem('todos',JSON.stringify(todos)))
  },[todos])
  // localStorage.setItem - 객체나 배열을 json 문자열로 변환해서 저장 , 값이 여러개인 경우[{},{}]형식으로 배열형태
  //setItem(key, value)

  const handleAdd = (todo) => {
    setTodos([...todos, todo])}
  const handleUpdate = (updated)=>{
    setTodos(todos.map((t)=>{
      return t.id === updated.id? updated: t}))
  }
const handDelect = (delected)=>{

  return setTodos(todos.filter((t)=>{
    return t.id !== delected.id}))
}
const filtered = getFilteredItem(todos, filter)
console.log('filter[0]은? ',filter[0])
  return (
    <section className={style.section}>
      <ul>
        {filtered.map((item) => {
          return <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelect={handDelect}/>
        })}
      </ul>
      <AddTodo 
      onAdd={handleAdd}
      />
    </section>
  )
}
//todolist컴포넌트 바깥 부분에 필터링하는 함수 정의
function getFilteredItem(todos, filter){//첫번째 인자는 위에서 받아온 todos배열, app.jsx에 필터값
if(filter === 'ALL' || filter === filter[0]){
  return todos
}
return todos.filter((todo)=>todo.status === filter)
}

 //todos를 로컬스토리지로부터 갖고오는 함수
function readRodosFROMlOCALsTORAGE(){
    const todos = localStorage.getItem('todos')
    console.log('get아이템', todos)
    return todos? JSON.parse(todos):[]
    
}

export default TodoList
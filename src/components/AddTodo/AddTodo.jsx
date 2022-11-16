import React, { useState } from 'react'
// 고유한 키 값을 만들어주는 라이브러리 -- yarn add uuid
//  https://www.npmjs.com/package/uuid 
import { v4 as uuidv4 } from 'uuid';
import style from './AddTodo.module.css'

const AddTodo = ({onAdd}) => {
    const [text, setText] = useState('')

    function handleChange(e){setText(e.target.value)}

    function handleSubmit(e){
        //form태그가 onSubmit될때 화면이 새로고침되는걸 방지
        e.preventDefault() 
        //text가 공백 == length는 0, 스페이스바 5번 입력trim으로 공백 제거 == length는 0
        if(text.trim().length === 0){return alert('1글자 이상 입력해주세요 ~')}
        //form태그가 submit시(button클릭시) 발생되는 함수, text.trim() - 맨 앞, 뒤 공백을 빼줌
        onAdd({id:uuidv4(), text:text.trim(), status:'ACTIVE'})
        setText('')}

    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input type="text"
                placeholder='할일을 입력해주세요'
                value={text}
                onChange={handleChange}
            />
            <button>ADD</button>
        </form>
    )
}

export default AddTodo
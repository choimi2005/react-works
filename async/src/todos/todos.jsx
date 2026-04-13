
import React, { useState } from 'react';
import TodoList from './TodoList';
const Todos = () => {
    // 할일 상태 관리
    const [todos, setTodos] = useState([

        {id:1 , text: '운동하기', completed: false},
        {id:2 , text: '영화보기', completed: false},

    ]);

    //입력 상자 상태관리
    const [inputValue, setInputValue] = useState("");

    //todo 배열의 크기
    console.log("할 일 개수: ", todos.length);


    //입력값 변경 핸들러
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);     
    }

    // 할일 추가 함수

    const handleAddTodo = () => {
        if(inputValue.trim() !== '') {
            const newTodo = {
                id: todos.length + 1, 
                text: inputValue,
                completed: false
            };

            console.log(todos);
            // 할일 목록 새할일이 기존 할일에 추가
            setTodos([...todos, newTodo]);
            setInputValue(""); // 입력필드 초기화
           
           
        }; // 빈 문자열인 경우 추가하지 않음
    }


    // 할일 완료 체크

    const handleComplete = (id) => {
        // todos 배열을 순회하면서 id가 일치하는 할일의 completed 속성을 반전
        // id가 일치하는 할일은 completed 속성을 반전시키고, 나머지는 그대로 유지
        setTodos(todos.map(todo =>(

            todo.id == id ? {...todo, completed: !todo.completed} : todo
        )))
    }


    // 할일 삭제 함수

    const handleDeleteTodo = (id) => {
        //id 가 일치하지 않는 할일 만 남김
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return(
        <div className="container">
            <h2>할 일 (to-do) 관리</h2>
            <input type="text"
                value={inputValue}
                onChange={handleInputChange} 
                placeholder="할 일을 입력하세요" />
            <button onClick={handleAddTodo}>추가</button>
            {/* {할 일 목록} */}
           <TodoList todos={todos} 
             onComplete={handleComplete} 
             onDelete={handleDeleteTodo} />
        </div>

    )


}

export default Todos;
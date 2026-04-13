
const TodoList=({todos, onComplete, onDelete})=>{
    <div>
         <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        <input 
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onComplete(todo.id)}
                        />
                        {todo.text} 
                        <button onClick={() => onDelete(todo.id)}>삭제</button>
                    </li>
                ))}
            </ul>




    </div>

}

export default TodoList;
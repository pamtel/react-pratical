import {useState} from 'react'
import Todos from './Todos';

function TodoList() {
    const data = [{id: 1, todo: "Prepare Breakfast"}, {id: 2, todo: "Learn TailwindCSS"}, {id: 3, todo: "Go to the pool"}];

    const [todos, setTodos] = useState(data);

    const [textInput, setTextInput] = useState("");

    const handleChange = (e) => {
        setTextInput(e.target.value);
    }
    const addTodoHandler = () => {
        const newTodo = {id: todos.length + 1, todo: textInput};
        setTodos([...todos, newTodo]);
        setTextInput("");
    }

    const deleteTodoHandler = (id) => {
        const newTodos = todos.filter(todoItem => {
            console.log(`The id in the todos is ${todoItem.id}`, `while the clicked id is ${id}`)
            {todoItem.id === id && console.log("This one above will be removed")}
            return todoItem.id !== id
        })
        setTodos(newTodos);
    }

    return (
        <div style={{textAlign: 'center'}}>
            <input type="text" value={textInput} onChange={handleChange} />
            <button onClick={addTodoHandler}>Add</button>
            <Todos todos={todos} deleteTodoHandler={deleteTodoHandler} />
        </div>
    )
}

export default TodoList

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import './Todos.scss';
import { removeTask } from './todosSlice';
import { Todo } from '../../common/types/Todo';
import AddTodo from './AddTodo';

function Todos() {
    const todos = useAppSelector((state: RootState) => state.todos);
    const dispatch = useAppDispatch();

    function handleRemoveTask(todo: Todo) {
        return () => {
            return dispatch(removeTask(todo));
        };
    }

    const todoItems: Todo[] = [];
    return (
        <div className="todo-wrapper">
            <AddTodo />
            <ul>
                <header>Todo List</header>
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <div className="todo-info">
                            <span>{todo.name}</span>
                            <span>{todo.status}</span>
                            <span>{todo.priority}</span>
                            <button onClick={handleRemoveTask(todo)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;

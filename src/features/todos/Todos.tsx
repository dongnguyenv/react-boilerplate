import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import './Todos.scss';
import { addNewTask, removeTask } from './todosSlice';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../../common/types/Todo';

function Todos() {
  const todos = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  function handleAddingTak($event: any) {
    $event.preventDefault();
    const testItem = {
      id: uuidv4(),
      name: 'asdas',
      status: 'Open',
      priority: 'High',
    } as Todo;

    dispatch(addNewTask(testItem));
  }

  function handleRemoveTask(todo: Todo) {
    return () => {
      return dispatch(removeTask(todo));
    };
  }

  const todoItems: Todo[] = [];
  return (
    <ul className="todo-wrapper">
      <button onClick={handleAddingTak}>Add Item</button>
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
  );
}

export default Todos;

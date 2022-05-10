import { randomUUID } from 'crypto';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import './Todos.scss';
import { Todo, addNewTask } from './todosSlice';

function Todos() {
  const todos = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  function handleAddingTak($event: any) {
    $event.preventDefault();
    const testItem = {
      id: randomUUID(),
      name: 'asdas',
      status: 'Open',
      priority: 'High',
    } as Todo;

    dispatch(addNewTask(testItem));
  }

  const todoItems: Todo[] = [];
  return (
    <ul className="todo-wrapper">
      <button onClick={handleAddingTak}>Add Item</button>
      <header>Todo List</header>
      {JSON.stringify(todos)}
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
}

export default Todos;

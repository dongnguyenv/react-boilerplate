import { useAppDispatch } from '../../app/hooks';
import './Todos.scss';
import { addNewTask, removeTask } from './todosSlice';
import { v4 as uuidv4 } from 'uuid';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Todo } from '../../common/types/Todo';

type FormValues = {
  id: string;
  name: string;
  status: string;
  priority: string;
};

function AddTodo() {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const testItem = {
      id: uuidv4(),
      name: data.name,
      status: data.status,
      priority: data.priority,
    } as Todo;

    dispatch(addNewTask(testItem));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} />
      <input {...register('status')} />
      <input {...register('priority')} />
      <input type="submit" />
    </form>
  );
}

export default AddTodo;

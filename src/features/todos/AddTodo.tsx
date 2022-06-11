import { useAppDispatch } from '../../app/hooks';
import './Todos.scss';
import { addNewTask } from './todosSlice';
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
            <div>
                <div className="form-control">
                    <label>Task Name:</label>
                    <input {...register('name')} />
                </div>
                <div className="form-control">
                    <label>Status:</label>
                    <input {...register('status')} />
                </div>
                <div className="form-control">
                    <label>Priority:</label>
                    <input {...register('priority')} />
                </div>
                <div className="form-control">
                    <input type="submit" />
                </div>
            </div>
        </form>
    );
}

export default AddTodo;

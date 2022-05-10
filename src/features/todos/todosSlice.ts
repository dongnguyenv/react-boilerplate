import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Todo {
  id: string | number | undefined;
  name: string;
  status:
    | 'Open'
    | 'In Progress'
    | 'Done'
    | 'To Do'
    | 'In Review'
    | 'Under review'
    | 'Approved';
  priority: 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';
}

const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<Todo>) => {
      return [action.payload, ...state];
    },
  },
});

export const { addNewTask } = todosSlice.actions;

export const selectTodo = (state: RootState) => state.todos.values;
export default todosSlice.reducer;

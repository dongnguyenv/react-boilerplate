import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Todo } from '../../common/types/Todo';

const initialState: Todo[] = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<Todo>) => {
      return [action.payload, ...state];
    },
    removeTask: (state, action: PayloadAction<Todo>) => {
      const result = [...state.filter((x) => x.id !== action.payload.id)];
      return result;
    },
  },
});

export const { addNewTask, removeTask } = todosSlice.actions;

export const selectTodo = (state: RootState) => state.todos.values;
export default todosSlice.reducer;

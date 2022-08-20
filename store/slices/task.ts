import { Task } from '@/models/task';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TaskState {
  tasks: Task[];
}

const initialState = { tasks: [] } as TaskState;

const taskSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

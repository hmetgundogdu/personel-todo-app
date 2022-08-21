import { Task, TaskDto } from '@/models/task';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTasksFromApi } from './task.actions';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TaskState {
  tasks: TaskDto[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
  tasks: [],
  loading: 'idle',
} as TaskState;

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<TaskDto>) {
      state.tasks.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasksFromApi.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

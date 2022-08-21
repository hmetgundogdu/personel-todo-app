import { TaskDto } from '@/models/task';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTasksFromApi, fetchTasksLocalStorage } from './task.actions';
import type { PayloadAction } from '@reduxjs/toolkit';
import { taskPriorties } from 'data/priority';

interface TaskState {
  tasks: TaskDto[];
}

const initialState = {
  tasks: [],
} as TaskState;

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(
      state,
      action: PayloadAction<Pick<TaskDto, 'name' | 'priorityId'>>,
    ) {
      const taskIds = state.tasks.map((t) => t.id);
      const maxTaskIds = Math.max(...taskIds);
      const newTaskId = maxTaskIds + 1;

      const payload = action.payload;
      const priority = taskPriorties.find((p) => p.id == payload.priorityId);

      if (priority === undefined) {
        return;
      }

      state.tasks.push({
        id: newTaskId,
        name: payload.name,
        priorityId: priority.id,
        priorityName: priority.name,
        priorityValue: priority.value,
      });

      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, action: PayloadAction<TaskDto>) {
      const { payload } = action;

      state.tasks = state.tasks.map((t) => (t.id === payload.id ? payload : t));
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, action: PayloadAction<number>) {
      const taskId = action.payload;

      state.tasks = state.tasks.filter((t) => t.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasksFromApi.fulfilled, (state, action) => {
      localStorage.setItem('tasks', JSON.stringify(state.tasks));

      state.tasks = action.payload;
    });
    builder.addCase(fetchTasksLocalStorage.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;

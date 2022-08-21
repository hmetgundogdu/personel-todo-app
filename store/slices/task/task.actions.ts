import { TaskDto } from '@/models/task';
import { RootState } from '@/store/store';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasksFromApi = createAsyncThunk(
  'task/fetchTasksFromApi',
  async (__, { rejectWithValue }) => {
    const response = await fetch(`${process.env.baseUrl}/tasks`);
    const isResponseNotReacable = response.ok === false;

    if (isResponseNotReacable) {
      rejectWithValue([]);
    }

    const responsePayload = (await response.json()) as TaskDto[];

    return responsePayload;
  },
);

export const fetchTasksFromLocalStorage = createAsyncThunk(
  'task/fetchTasksFromLocalStorage',
  async (__, { rejectWithValue }) => {
    try {
      const data = localStorage.getItem('tasks');

      if (data === null) return rejectWithValue([] as TaskDto[]);

      const tasks = JSON.parse(data);

      return tasks as TaskDto[];
    } finally {
      rejectWithValue([] as TaskDto[]);
    }
  },
);

export const saveTasksToLocalStorage = createAsyncThunk(
  'task/saveTasksToLocalStorage',
  async (__, { getState }) => {
    const state = getState() as RootState;
    const tasks = state.tasks.tasks;

    const isLocalStorageUsable = typeof window !== 'undefined';

    if (isLocalStorageUsable) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  },
);

import { TaskDto } from '@/models/task';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasksFromApi = createAsyncThunk(
  'task/getTasks',
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

export const fetchTasksLocalStorage = createAsyncThunk(
  'task/getTasksFromLocalStorage',
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

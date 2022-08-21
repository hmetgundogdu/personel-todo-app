import { TaskDto } from '@/models/task';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasksFromApi = createAsyncThunk(
  'fetchTasksFromApi',
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

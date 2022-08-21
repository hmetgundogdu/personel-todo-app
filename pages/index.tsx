import type { NextPage } from 'next';
import { TaskList } from 'widgets/TaskList';
import { CreateTaskForm } from 'widgets/CreateTaskForm';
import { useEffect } from 'react';
import {
  fetchTasksFromApi,
  fetchTasksLocalStorage,
} from '@/store/slices/task/task.actions';
import { useAppDispatch } from '@/store/store';

const Index: NextPage = () => {
  // Store
  const dispatch = useAppDispatch();
  // Methods
  const loadTask = () => {
    dispatch(fetchTasksLocalStorage())
      .unwrap()
      .catch(() => dispatch(fetchTasksFromApi()));
  };
  // Effects
  useEffect(() => loadTask(), []);

  return (
    <>
      <CreateTaskForm />
      <TaskList />
    </>
  );
};

export default Index;

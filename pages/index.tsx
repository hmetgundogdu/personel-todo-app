import type { NextPage } from 'next';
import { TaskList } from './index/TaskList';
import { CreateTaskForm } from './index/CreateTaskForm';
import { useEffect } from 'react';
import {
  fetchTasksFromApi,
  fetchTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from '@/store/slices/task/task.actions';
import { useAppDispatch } from '@/store/store';

const Index: NextPage = () => {
  // Store
  const dispatch = useAppDispatch();
  // Methods
  const loadTask = () => {
    dispatch(fetchTasksFromLocalStorage())
      .unwrap()
      .catch(() => {
        dispatch(fetchTasksFromApi())
          .unwrap()
          .then(() => dispatch(saveTasksToLocalStorage()));
      });
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

import type { NextPage } from 'next';
import { TaskList } from 'widgets/TaskList';
import { CreateTaskForm } from 'widgets/CreateTaskForm';

const Index: NextPage = () => {
  return (
    <>
      <CreateTaskForm />
      <TaskList />
    </>
  );
};

export default Index;

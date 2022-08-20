import type { NextPage } from 'next';
import { CreateTaskForm } from 'widgets/CreateTaskForm';
import styles from '../styles/index.module.scss';

const Index: NextPage = () => {
  return (
    <>
      <CreateTaskForm />
    </>
  );
};

export default Index;

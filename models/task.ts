import { TaskPriority } from './taskPriority';

export type Task = {
  id: number;
  name: string;
  priority: TaskPriority;
};

export type TaskDto = {
  id: number;
  name: string;
  priorityId: number;
  priorityName: string;
  priorityValue: number;
};

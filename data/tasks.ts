import { Task } from '@/models/task';
import { taskPriorties } from './priority';

export const tasks: Task[] = Array(10)
  .fill(1)
  .map((__, index) => ({
    id: index + 1,
    name: `Do some task done ${index + 1}`,
    priority: taskPriorties[index % 3],
  }));

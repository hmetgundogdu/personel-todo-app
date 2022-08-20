export type TaskPriorty = {
  id: number;
  name: string;
  value: number;
};

export type Task = {
  name: string;
  priorty: TaskPriorty;
};

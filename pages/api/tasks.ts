import { TaskDto } from '@/models/task';
import { tasks } from 'data/tasks';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TaskDto[]>,
) {
  res.status(200).json(
    tasks.map(
      ({ priority, ...task }) =>
        ({
          ...task,
          priorityId: priority.id,
          priorityName: priority.name,
          priorityValue: priority.value,
        } as TaskDto),
    ),
  );
}

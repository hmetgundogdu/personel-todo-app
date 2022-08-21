import { taskPriorties } from 'data/priority';
import { TaskPriority } from '@/models/task';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TaskPriority[]>,
) {
  res.status(200).json(taskPriorties);
}

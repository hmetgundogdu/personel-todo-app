import { taskPriorties } from 'data/priority';
import { TaskPriorty } from '@/models/task';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TaskPriorty[]>,
) {
  res.status(200).json(taskPriorties);
}

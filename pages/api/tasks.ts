// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Task } from '@/models/task';
import { tasks } from 'data/tasks';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task[]>,
) {
  res.status(200).json(tasks);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type TaskPriorty = {
  name: string;
  value: number;
}

type Task = {
  name: string,
  priorty: 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Task[]>
) {
  const tasks : Task[] = [
    {

    }
  ]


  res
  .status(200)
  .json(tasks);
}

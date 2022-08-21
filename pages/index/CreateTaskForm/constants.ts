import { TaskPriority } from '@/models/taskPriority';

import * as yup from 'yup';

export const createTaskFormDefaults = {
  name: '',
  priority: null as TaskPriority | null,
};

export const createTaskFormSchema = yup.object({
  name: yup
    .string()
    .max(255)
    .required('Name is required')
    .matches(/^[a-z0-9]+$/i, 'Name field should be alpha numeric'), // alpha numeric
  priority: yup.object().typeError('Priorty is required').required(),
});

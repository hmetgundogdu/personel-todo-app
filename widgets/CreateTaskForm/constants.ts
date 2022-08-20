import { TaskPriorty } from '@/models/task';

import * as yup from 'yup';

export const createTaskFormDefaults = {
  name: '',
  priorty: null as TaskPriorty | null,
};

export const createTaskFormSchema = yup.object({
  name: yup
    .string()
    .max(255)
    .required('Name is required')
    .matches(/^[a-z0-9]+$/i), // alpha numeric
  priorty: yup.object().typeError('Priorty is required').required(),
});

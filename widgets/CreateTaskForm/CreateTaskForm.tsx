import { Grid, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { createTaskFormDefaults, createTaskFormSchema } from './constants';
import CreateTaskFormFields from './CreateTaskFormFields';
import { yupResolver } from '@hookform/resolvers/yup';
import { TaskDto } from '@/models/task';
import { useAppDispatch } from '@/store/store';

import { CreateTaskFormType } from './types';
import { addTask } from '@/store/slices/task/task.slice';
import { useState } from 'react';

export default function CreateTaskForm() {
  // Store
  const dispatch = useAppDispatch();
  // Form
  const form = useForm<CreateTaskFormType>({
    defaultValues: createTaskFormDefaults,
    resolver: yupResolver(createTaskFormSchema),
  });

  const handleCreateButtonClick = () => {
    const f = form.getValues();
    const fp = f.priority;

    if (fp === null) return;

    dispatch(
      addTask({
        name: f.name,
        priorityId: fp.id,
      }),
    );

    form.reset(createTaskFormDefaults);
  };

  return (
    <FormProvider {...form}>
      <Grid container>
        <Typography component="b" mb={1}>
          Create New Job
        </Typography>
        <CreateTaskFormFields
          onCreateButtonClick={form.handleSubmit(handleCreateButtonClick)}
        />
      </Grid>
    </FormProvider>
  );
}

import { Grid, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { createTaskFormDefaults, createTaskFormSchema } from './constants';
import CreateTaskFormFields from './CreateTaskFormFields';
import { yupResolver } from '@hookform/resolvers/yup';

export default function CreateTaskForm() {
  // Form
  const form = useForm({
    defaultValues: createTaskFormDefaults,
    resolver: yupResolver(createTaskFormSchema),
  });

  const handleButtonClick = () => {};

  return (
    <FormProvider {...form}>
      <Grid container>
        <Typography component="b" mb={1}>
          Create New Job
        </Typography>
        <CreateTaskFormFields
          onCreateButtonClick={form.handleSubmit(handleButtonClick)}
        />
      </Grid>
    </FormProvider>
  );
}

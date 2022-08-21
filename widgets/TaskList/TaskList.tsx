import { Grid, Typography } from '@mui/material';
import TaskListTable from './TaskListTable';

import styles from './tasklist.module.scss';
import { useForm, FormProvider } from 'react-hook-form';
import { taskListFilterFormDefaults } from './constants';
import TaskListFilterForm from './TaskListFilterForm';

export default function TaskList() {
  // Form
  const filterForm = useForm({ defaultValues: taskListFilterFormDefaults });

  return (
    <Grid container gap={1} direction="row">
      <Grid container item xs={12} justifyContent="space-between">
        <Grid>
          <Typography component="b" mb={1}>
            Job List
          </Typography>
        </Grid>
        <Grid>
          <Typography
            mb={1}
            component="b"
            fontSize={13}
            className={styles['task-complete-status-text']}
          >
            (3/3)
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <FormProvider {...filterForm}>
          <TaskListFilterForm />
          <TaskListTable />
        </FormProvider>
      </Grid>
    </Grid>
  );
}

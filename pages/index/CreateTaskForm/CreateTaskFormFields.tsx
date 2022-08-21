import { Button, Grid, TextField } from '@mui/material';
import { SimpleSelect } from 'common/SimpleSelect';
import { taskPriorties } from 'data/priority';
import { Controller, useFormContext } from 'react-hook-form';
import { CreateTaskFormType } from './types';
import AddIcon from '@mui/icons-material/Add';
import { MouseEventHandler } from 'react';

interface CreateTaskFormFieldsProps {
  onCreateButtonClick: MouseEventHandler<HTMLButtonElement>;
}

export default function CreateTaskFormFields({
  onCreateButtonClick,
}: CreateTaskFormFieldsProps) {
  // Form
  const form = useFormContext<CreateTaskFormType>();
  // Memorize
  const { control } = form;

  return (
    <Grid columnGap={2} rowGap={2} container alignItems="center">
      <Grid item xs={12} sm={5} md={6} lg={7}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              size="small"
              fullWidth
              label="Job Name"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
      </Grid>
      <Grid item flexGrow={1}>
        <Controller
          name="priority"
          control={control}
          render={({ field, fieldState }) => (
            <SimpleSelect
              {...field}
              fullWidth
              displayEmpty
              ablePassEmpty
              size="small"
              label="Job Priorty"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              options={taskPriorties}
              getLabelField={(o) => o.name}
              getValueField={(o) => String(o.id)}
            />
          )}
        />
      </Grid>
      <Grid xs="auto" item>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={onCreateButtonClick}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}

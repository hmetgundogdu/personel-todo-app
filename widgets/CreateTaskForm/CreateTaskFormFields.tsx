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
    <Grid direction="row" columnGap={2} container alignItems="center">
      <Grid flexGrow={1}>
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
      <Grid xs={12} sm={2}>
        <Controller
          name="priorty"
          control={control}
          render={({ field, fieldState }) => (
            <SimpleSelect
              {...field}
              fullWidth
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
      <Grid>
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

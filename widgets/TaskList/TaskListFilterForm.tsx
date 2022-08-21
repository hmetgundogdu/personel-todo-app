import React from 'react';

import { Search } from '@mui/icons-material';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { SimpleSelect } from 'common/SimpleSelect';
import { taskPriorties } from 'data/priority';
import { Controller, useFormContext } from 'react-hook-form';
import { TaskListFilterFormType } from './type';

export default function TaskListFilterForm() {
  // Form
  const form = useFormContext<TaskListFilterFormType>();
  // Memorize
  const { control } = form;

  return (
    <Grid container item xs={12} gap={2}>
      <Grid item xs={12} sm={5} md={6} lg={7} flexGrow={1}>
        <Controller
          name="taskName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              size="small"
              label="Job Name"
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
      </Grid>
      <Grid item flexGrow={1}>
        <Controller
          name="priorty"
          control={control}
          render={({ field }) => (
            <SimpleSelect
              {...field}
              size="small"
              displayEmpty
              ablePassEmpty
              label="Job Priorty"
              emptyOptionLabel="Priorty (all)"
              getLabelField={(tp) => tp.name}
              getValueField={(tp) => String(tp.value)}
              options={taskPriorties}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

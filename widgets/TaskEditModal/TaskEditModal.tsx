import { TaskDto } from '@/models/task';
import { TaskPriority } from '@/models/taskPriority';

import {
  Button,
  Grid,
  Modal,
  ModalProps,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import { useState } from 'react';
import { taskPriorties } from 'data/priority';
import { SimpleSelect } from 'common/SimpleSelect';

import styles from './task-edit-modal.module.scss';

interface TaskEditModalProps {
  task: TaskDto;
  onTaskSave: (task: TaskDto) => void;
}

export default function TaskEditModal({
  task,
  onTaskSave,
  ...modalProps
}: TaskEditModalProps & Omit<ModalProps, 'children'>) {
  const [priority, setPriority] = useState<TaskPriority | null>({
    id: task.priorityId,
    name: task.priorityName,
    value: task.priorityValue,
  });
  // Handlers
  const handleCancelButtonClick = () => {
    if (modalProps.onClose) modalProps.onClose({} as Event, 'backdropClick');
  };

  const handleSaveButtonClick = () => {
    const newTask = { ...task };

    if (priority === null) {
      return;
    }

    newTask.priorityId = priority.id;
    newTask.priorityName = priority.name;
    newTask.priorityValue = priority.value;

    onTaskSave(newTask);
  };

  return (
    <Modal {...modalProps} className={styles['task-edit-modal']}>
      <Grid item container justifyContent="center" xs={11} sm={9} md={7} lg={4}>
        <Paper className={styles['modal-content']}>
          <Grid container rowGap={5} className={styles['field-container']}>
            <Grid item xs={12} container justifyContent="center">
              <Typography variant="h5" component="h2">
                Job Edit
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                disabled
                fullWidth
                size="small"
                label="Job Name"
                defaultValue={task.name}
              />
            </Grid>
            <Grid item xs={12}>
              <SimpleSelect
                size="small"
                label="Job Priority"
                value={priority}
                onChange={setPriority}
                options={taskPriorties}
                getLabelField={(o) => o.name}
                getValueField={(o) => String(o.id)}
              />
            </Grid>
            <Grid item container xs={12} justifyContent="space-evenly">
              <Grid item xs={4}>
                <Button
                  fullWidth
                  size="large"
                  color="inherit"
                  variant="contained"
                  onClick={handleCancelButtonClick}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  fullWidth
                  size="large"
                  color="secondary"
                  variant="contained"
                  onClick={handleSaveButtonClick}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Modal>
  );
}

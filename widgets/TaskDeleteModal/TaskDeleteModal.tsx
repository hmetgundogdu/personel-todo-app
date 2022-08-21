import { TaskDto } from '@/models/task';
import { ErrorOutline } from '@mui/icons-material';

import {
  Grid,
  Modal,
  Paper,
  Button,
  ModalProps,
  Typography,
} from '@mui/material';

import styles from './task-delete-modal.module.scss';

interface TaskDeleteModalProps {
  task: TaskDto;
  onApprove: () => void;
}

export default function TaskDeleteModal({
  task,
  onApprove,
  ...modalProps
}: TaskDeleteModalProps & Omit<ModalProps, 'children'>) {
  // Handlers
  const handleCancelButtonClick = () => {
    if (modalProps.onClose) modalProps.onClose({} as Event, 'backdropClick');
  };

  return (
    <Modal {...modalProps} className={styles['task-edit-modal']}>
      <Grid item container justifyContent="center" xs={11} sm={9} md={7} lg={4}>
        <Paper className={styles['modal-content']}>
          <Grid container rowGap={5} className={styles['field-container']}>
            <Grid item xs={12} container justifyContent="center">
              <ErrorOutline fontSize="large" />
            </Grid>
            <Grid item xs={12} container justifyContent="center">
              <Typography variant="h5" component="h2">
                Are you sure want to delete it?
              </Typography>
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
                  color="error"
                  variant="contained"
                  onClick={onApprove}
                >
                  Approve
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Modal>
  );
}

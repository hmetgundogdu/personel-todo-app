import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { Delete, Edit } from '@mui/icons-material';
import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';

import PriorityBadge from 'common/PriortyBadge/PriorityBadge';

import { TaskDto } from '@/models/task';
import useSorting, { Sorting } from 'hooks/useSorting';

import { useFormContext } from 'react-hook-form';
import { TaskListFilterFormType } from './type';

import styles from './tasklist-table.module.scss';
import { TaskEditModal } from 'widgets/TaskEditModal';
import { deleteTask, updateTask } from '@/store/slices/task/task.slice';
import { TaskDeleteModal } from 'widgets/TaskDeleteModal';

export default function TaskListTable() {
  // Form
  const form = useFormContext<TaskListFilterFormType>();
  // Watches
  const filters = form.watch(['taskName', 'priorty']);
  // Store
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((s) => s.tasks.tasks);
  // States
  const [sorting, setSorting] = useState<Sorting<TaskDto> | null>(null);
  const [toEditTask, setToEditTask] = useState<TaskDto | null>(null);
  const [toDeleteTask, setToDeleteTask] = useState<TaskDto | null>(null);
  // Memorize
  const sortedTasks = useSorting({
    data: tasks,
    sorting: sorting ? [sorting] : [],
  });

  const [name, priorty] = filters;
  const nameRegexp = RegExp(name, 'i');

  const filteredTasks = sortedTasks.filter(
    (d) =>
      nameRegexp.test(d.name) && (priorty ? d.priorityId === priorty.id : true),
  );

  // Handlers
  const handleSortCellClick = (field: keyof TaskDto) => {
    const isCurrentSortEqualsClicked = field === sorting?.field;

    const desc = isCurrentSortEqualsClicked ? !sorting?.desc : true;
    const newSorting = { field, desc };

    setSorting(newSorting);
  };

  const handleTaskEditModalSubmit = (task: TaskDto) => {
    setToEditTask(null);
    dispatch(updateTask(task));
  };

  const handleDeleteTaskApprove = () => {
    if (toDeleteTask) {
      dispatch(deleteTask(toDeleteTask.id));
    }

    setToDeleteTask(null);
  };

  return (
    <Grid item xs={12}>
      {toEditTask !== null && (
        <TaskEditModal
          open
          task={toEditTask}
          onClose={() => setToEditTask(null)}
          onTaskSave={handleTaskEditModalSubmit}
        />
      )}
      {toDeleteTask !== null && (
        <TaskDeleteModal
          open
          task={toDeleteTask}
          onClose={() => setToDeleteTask(null)}
          onApprove={handleDeleteTaskApprove}
        />
      )}
      <TableContainer>
        <Table size="small" className={styles['task-list-table']}>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSortCellClick('name')}>
                <TableSortLabel
                  active={sorting?.field === 'name'}
                  direction={sorting?.desc ? 'desc' : 'asc'}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell onClick={() => handleSortCellClick('priorityValue')}>
                <TableSortLabel
                  active={sorting?.field === 'priorityValue'}
                  direction={sorting?.desc ? 'desc' : 'asc'}
                >
                  Priorty
                </TableSortLabel>
              </TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTasks.map((t) => (
              <TableRow key={t.id}>
                <TableCell>{t.name}</TableCell>
                <TableCell width="1%" align="center">
                  <PriorityBadge
                    priorityId={t.priorityId}
                    priorityName={t.priorityName}
                  />
                </TableCell>
                <TableCell className={styles['action']}>
                  <IconButton size="small" onClick={() => setToEditTask(t)}>
                    <Edit />
                  </IconButton>
                  <IconButton size="small" onClick={() => setToDeleteTask(t)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

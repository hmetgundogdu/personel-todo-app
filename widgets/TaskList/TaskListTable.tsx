import React, { useState } from 'react';
import { useAppSelector } from '@/store/store';

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

export default function TaskListTable() {
  // Form
  const form = useFormContext<TaskListFilterFormType>();
  // Watches
  const filters = form.watch(['taskName', 'priorty']);
  // Store
  const tasks = useAppSelector((s) => s.tasks.tasks);
  // States
  const [sorting, setSorting] = useState<Sorting<TaskDto> | null>(null);
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

  return (
    <Grid item xs={12}>
      <TableContainer>
        <Table size="small" className={styles['task-list-table']}>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSortCellClick('name')}>
                <TableSortLabel>Name</TableSortLabel>
              </TableCell>
              <TableCell onClick={() => handleSortCellClick('priorityValue')}>
                <TableSortLabel>Priorty</TableSortLabel>
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
                  <IconButton size="small">
                    <Edit />
                  </IconButton>
                  <IconButton size="small">
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

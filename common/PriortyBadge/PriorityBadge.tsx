import { TaskPriority } from '@/models/task';
import { Badge, BadgeProps } from '@mui/material';
import React from 'react';

interface PriorityBadgeProps {
  priorityId: number;
  priorityName: string;
}

export default function PriorityBadge({
  priorityId,
  priorityName,
  ...badgeProps
}: PriorityBadgeProps & BadgeProps) {
  let color: BadgeProps['color'] = 'default';

  switch (priorityId) {
    case 1:
      color = 'error';
      break;
    case 2:
      color = 'warning';
      break;
    case 3:
      color = 'primary';
      break;
  }

  return <Badge badgeContent={priorityName} color={color} {...badgeProps} />;
}

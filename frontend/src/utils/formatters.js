import { format } from 'date-fns';

export function formatDate(value, pattern = 'MMM d, yyyy') {
  if (!value) return 'Not scheduled';
  return format(new Date(value), pattern);
}

export function formatPercent(value) {
  return `${Math.round(Number(value || 0))}%`;
}

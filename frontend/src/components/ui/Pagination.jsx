import { ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './Button.jsx';

export default function Pagination({ page = 1, totalPages = 1, onPageChange }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <Button variant="secondary" disabled={page <= 1} onClick={() => onPageChange?.(page - 1)}>
        <ChevronLeft size={16} /> Previous
      </Button>
      <span className="text-sm font-medium text-slate-600">
        Page {page} of {totalPages}
      </span>
      <Button variant="secondary" disabled={page >= totalPages} onClick={() => onPageChange?.(page + 1)}>
        Next <ChevronRight size={16} />
      </Button>
    </div>
  );
}

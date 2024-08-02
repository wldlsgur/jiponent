import { ReactNode } from 'react';

export interface ContextProps {
  currentPage: number;
  totalPages: number;
  handleSelectPage: (newPage: number) => void;
  handleMovePrevPage: () => void;
  handleMoveNextPage: () => void;
}

export interface ProviderProps {
  defaultPage: number;
  limit: number;
  total: number;
  onPageChange: (newPage: number) => void;
  children: ReactNode;
}

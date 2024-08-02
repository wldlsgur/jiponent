import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ContextProps, ProviderProps } from './type';

export const PaginationContext = createContext<ContextProps>({
  currentPage: 0,
  totalPages: 0,
  handleSelectPage: () => {},
  handleMovePrevPage: () => {},
  handleMoveNextPage: () => {},
});

export const usePagination = () => useContext(PaginationContext);

export const PaginationProvider = ({
  defaultPage,
  limit,
  total,
  onPageChange,
  children,
}: ProviderProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const onPageChangeRef = useRef(onPageChange);
  const totalPages = Math.ceil(total / limit);

  const handleSelectPage = useCallback((newPage: number) => {
    onPageChangeRef.current(newPage);
    setCurrentPage(newPage);
  }, []);

  const handleMovePrevPage = useCallback(() => {
    if (currentPage > 1) {
      handleSelectPage(currentPage - 1);
    }
  }, [currentPage, handleSelectPage]);

  const handleMoveNextPage = useCallback(() => {
    if (currentPage + 1 <= totalPages) {
      handleSelectPage(currentPage + 1);
    }
  }, [currentPage, totalPages, handleSelectPage]);

  useEffect(() => {
    onPageChangeRef.current = onPageChange;
  }, [onPageChange]);

  const value = useMemo(
    () => ({
      currentPage,
      totalPages,
      handleSelectPage,
      handleMoveNextPage,
      handleMovePrevPage,
    }),
    [currentPage, totalPages, handleSelectPage, handleMoveNextPage, handleMovePrevPage],
  );

  return <PaginationContext.Provider value={value}>{children}</PaginationContext.Provider>;
};

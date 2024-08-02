import { PaginationProvider } from '../context';
import PageButtons from '../paginationButtons';
import NextButton from '../paginationNextButton';
import PrevButton from '../paginationPrevButton';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Pagination = ({
  defaultPage,
  limit,
  total,
  onPageChange,
  children,
  className,
  ...rest
}: Props) => {
  return (
    <PaginationProvider
      defaultPage={defaultPage}
      limit={limit}
      total={total}
      onPageChange={onPageChange}
    >
      <div
        className={combineClassName(S.default.container, className)}
        {...rest}
      >
        {children}
      </div>
    </PaginationProvider>
  );
};

Pagination.PrevButton = PrevButton;
Pagination.NextButton = NextButton;
Pagination.PageButtons = PageButtons;

export default Pagination;

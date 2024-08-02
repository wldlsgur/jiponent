import { usePagination } from '../context';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const PageButtons = ({
  maxCount,
  activeColor,
  activeBackgroundColor,
  className,
  style,
  ...rest
}: Props) => {
  const { totalPages, currentPage, handleSelectPage } = usePagination();

  const createPageButtons = () => {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
      .filter((page) => {
        const minPage = Math.floor((currentPage - 1) / maxCount) * maxCount + 1;
        const maxPage = minPage + maxCount - 1;

        return page >= minPage && page <= maxPage;
      })
      .map((page) => {
        const isActive = page === currentPage;
        const activeStyle = {
          ...(isActive && {
            color: activeColor,
            backgroundColor: activeBackgroundColor,
          }),
        };

        return (
          <button
            type='button'
            key={page}
            className={combineClassName(S.default.button, className)}
            style={{ ...style, ...activeStyle }}
            {...rest}
            onClick={() => handleSelectPage(page)}
          >
            {page}
          </button>
        );
      });
  };

  return <>{createPageButtons()}</>;
};

export default PageButtons;

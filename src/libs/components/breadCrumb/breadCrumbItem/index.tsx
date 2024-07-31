import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const BreadCrumbItem = ({ children, href, active, separator, className, ...rest }: Props) => {
  return (
    <div
      className={combineClassName(S.default.container, className)}
      {...rest}
    >
      <a
        href={href}
        className={S.default.anchor}
      >
        {children}
      </a>
      {!active && separator}
    </div>
  );
};

export default BreadCrumbItem;

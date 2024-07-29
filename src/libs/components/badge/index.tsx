import { ReactNode } from 'react';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Badge = ({
  children,
  count,
  limit,
  dot = false,
  backgroundColor = '#f44',
  textColor = 'white',
  fontSize = 10,
  showZero = false,
  className,
  style,
  ...rest
}: Props) => {
  let content: ReactNode = count;

  if (typeof count === 'number' && count > limit) {
    content = `${limit}+`;
  }

  if (showZero) {
    content = 0;
  }

  if (dot) {
    content = '';
  }

  return (
    <div className={S.default.container}>
      {children}
      <sub
        className={combineClassName(`${S.default.badge} ${dot ? S.default.dot : ''}`, className)}
        style={{
          fontSize,
          backgroundColor,
          color: textColor,
          ...style,
        }}
        {...rest}
      >
        {content}
      </sub>
    </div>
  );
};

export default Badge;

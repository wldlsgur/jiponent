import * as S from './style.module.css';
import { CircleProps } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Circle = ({ size, className, style, ...rest }: CircleProps) => {
  return (
    <div
      className={combineClassName(`${S.default.base} ${S.default.circle}`, className)}
      style={{
        ...style,
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
      {...rest}
    />
  );
};

export default Circle;

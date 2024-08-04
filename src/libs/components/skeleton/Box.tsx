import * as S from './style.module.css';
import { BoxProps } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Box = ({ width, height, className, style, ...rest }: BoxProps) => {
  return (
    <div
      className={combineClassName(`${S.default.base} ${S.default.box}`, className)}
      style={{
        ...style,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      {...rest}
    />
  );
};

export default Box;

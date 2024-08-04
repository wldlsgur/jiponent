import { v4 as uuidv4 } from 'uuid';
import * as S from './style.module.css';
import { ParagraphProps } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Paragraph = ({
  line = 1,
  width = '100%',
  height = '10px',
  className,
  style,
  ...rest
}: ParagraphProps) => {
  return (
    <>
      {Array.from({ length: line }, () => (
        <div
          key={uuidv4()}
          className={combineClassName(`${S.default.base} ${S.default.paragraph}`, className)}
          style={{
            ...style,
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
          }}
          {...rest}
        />
      ))}
    </>
  );
};

export default Paragraph;

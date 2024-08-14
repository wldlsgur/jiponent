import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const TapItem = ({
  title,
  index,
  active,
  length = 0,
  content,
  className,
  style,
  activeStyle,
  ...rest
}: Props) => {
  const computedStyle = {
    backgroundColor: active ? '#83cdff' : '#eee',
    minWidth: `${100 / length}%`,
    ...style,
    ...(active ? activeStyle : {}),
  };

  return (
    <button
      type='button'
      className={combineClassName(S.default.title, className)}
      style={computedStyle}
      {...rest}
    >
      {title}
    </button>
  );
};

export default TapItem;

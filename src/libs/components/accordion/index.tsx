import { useState } from 'react';
import * as S from './style.module.css';
import { Props } from './type';
import useResize from '@/libs/hooks/useResize';
import useToggle from '@/libs/hooks/useToggle';
import combineClassName from '@/libs/utils/combineClassName';

const Accordion = ({
  defaultVisible = false,
  duration = 300,
  children,
  header,
  className,
  ...rest
}: Props) => {
  const [height, setHeight] = useState(0);
  const { isToggle, handleToggle } = useToggle(defaultVisible);
  const ref = useResize(({ height: newHeight }) => setHeight(newHeight));

  return (
    <div
      className={combineClassName(S.default.container, className)}
      {...rest}
    >
      <button
        type='button'
        className={S.default.button}
        onClick={handleToggle}
      >
        {header}
      </button>
      <div
        className={S.default.content}
        style={{
          height: isToggle ? height : 0,
          transitionDuration: `${duration}ms`,
        }}
      >
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

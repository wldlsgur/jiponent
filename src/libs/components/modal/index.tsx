import { createPortal } from 'react-dom';
import useBodyScroll from './hooks/useBodyScroll';
import * as S from './style.module.css';
import { Props } from './type';
import { useClickAway } from '@/libs';
import combineClassName from '@/libs/utils/combineClassName';

const Modal = ({
  visible,
  children,
  onClose,
  className,
  portalTarget = document.body,
  ...rest
}: Props) => {
  const ref = useClickAway<HTMLDivElement>(() => onClose && onClose());
  useBodyScroll(visible);
  const backgroundClass = `${S.default.background} ${visible ? '' : S.default.hidden}`;

  return createPortal(
    <div
      className={combineClassName(backgroundClass, className)}
      {...rest}
    >
      <div ref={ref}>{children}</div>
    </div>,
    portalTarget,
  );
};

export default Modal;

import { createPortal } from 'react-dom';
import useBodyScroll from './hooks/useBodyScroll';
import * as S from './style';
import { Props } from './type';
import { useClickAway } from '@/libs';

const Modal = ({ visible, children, onClose, backgroundColor, zIndex, ...rest }: Props) => {
  const ref = useClickAway<HTMLElement>(() => onClose());
  useBodyScroll(visible);

  return createPortal(
    <S.Background
      $visible={visible}
      $backgroundColor={backgroundColor}
      $zIndex={zIndex}
      {...rest}
    >
      <S.Container ref={ref}>{children}</S.Container>
    </S.Background>,
    document.body,
  );
};

export default Modal;

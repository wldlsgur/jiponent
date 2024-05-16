import { DividerProps } from './type';
import * as S from './style';

const Divider = ({ direction = 'horizontal', ...rest }: DividerProps) => {
  return (
    <S.Divider
      $direction={direction}
      {...rest}
    />
  );
};

export default Divider;

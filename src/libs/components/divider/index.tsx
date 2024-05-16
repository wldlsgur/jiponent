import * as S from './style';
import { DividerProps } from './type';

const Divider = ({ direction = 'horizontal', ...rest }: DividerProps) => {
  return (
    <S.Divider
      $direction={direction}
      {...rest}
    />
  );
};

export default Divider;

import { useDropdownContext } from '../context/dropdownContext';
import * as S from './style';
import { Props } from './type';

const DropdownSelect = ({ ...rest }: Props) => {
  const { selectedValue } = useDropdownContext();

  return <S.SelectedValue {...rest}>{selectedValue}</S.SelectedValue>;
};

export default DropdownSelect;

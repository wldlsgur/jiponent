import { MouseEvent } from 'react';
import { useDropdownContext } from '../context/dropdownContext';
import * as S from './style';
import { Props } from './type';

const DropdownList = ({ list = [], ...rest }: Props) => {
  const { isToggle, handleValueChange } = useDropdownContext();
  const { listRest, itemRest } = rest;

  return (
    <S.DropdownList
      $visible={isToggle}
      {...listRest}
    >
      {list.map((value) => (
        <S.DropdownItem
          key={value}
          onClick={(event: MouseEvent<HTMLLIElement>) => handleValueChange(event, value)}
          {...itemRest}
        >
          {value}
        </S.DropdownItem>
      ))}
    </S.DropdownList>
  );
};

export default DropdownList;

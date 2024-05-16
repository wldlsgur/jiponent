import { MouseEvent } from 'react';
import { useDropdownContext } from '../context/dropdownContext';
import { Props } from './type';
import * as S from './style';

const DropdownList = ({ list = [], ...rest }: Props) => {
  const { isToggle, handleValueChange } = useDropdownContext();
  const { listRest, itemRest } = rest;

  return (
    <S.DropdownList
      $visible={isToggle}
      {...listRest}
    >
      {list.map((value) => {
        return (
          <S.DropdownItem
            key={value}
            onClick={(event: MouseEvent<HTMLLIElement>) => handleValueChange(event, value)}
            {...itemRest}
          >
            {value}
          </S.DropdownItem>
        );
      })}
    </S.DropdownList>
  );
};

export default DropdownList;

import DropdownItem from './components/dropdownItem';
import useDropdown from './hooks/useDropdown';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Dropdown = ({ defaultValue, list = [], onChange, ulAttribute, liAttribute }: Props) => {
  const { ref, selectedValue, isToggle, handleValueChange, handleToggle, handleDropdownKeyDown } =
    useDropdown({ defaultValue, onChange });
  const { className: ulClassName, ...restUlAttribute } = ulAttribute || {};

  return (
    <div
      ref={ref}
      role='button'
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleDropdownKeyDown}
    >
      <ul
        className={combineClassName(S.default.list, ulClassName)}
        {...restUlAttribute}
      >
        <DropdownItem
          value={selectedValue || list[0]}
          {...liAttribute}
        />
        {isToggle &&
          list.map((value) => (
            <DropdownItem
              key={value?.toString()}
              value={value}
              onClick={handleValueChange}
              {...liAttribute}
            />
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;

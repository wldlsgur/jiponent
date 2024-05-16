import DropdownList from '../dropdownList';
import DropdownSelect from '../dropdownSelect';
import { DropdownContextProvider } from '../context/dropdownContext';
import { Props } from './type';

const DropdownWrapper = ({ defaultValue, onChange, children, ...rest }: Props) => {
  return (
    <DropdownContextProvider
      defaultValue={defaultValue}
      onChange={onChange}
      {...rest}
    >
      {children}
    </DropdownContextProvider>
  );
};

DropdownWrapper.Select = DropdownSelect;
DropdownWrapper.List = DropdownList;

export default DropdownWrapper;

import { KeyboardEventHandler, MouseEvent, ReactNode, HTMLAttributes } from 'react';

export interface DropdownContextProps {
  selectedValue: string;
  isToggle: boolean;
  handleValueChange: (event: MouseEvent<HTMLLIElement>, newValue: string) => void;
  handleSetFalse: () => void;
  handleToggle: () => void;
  handleDropdownKeyDown: KeyboardEventHandler<HTMLDivElement>;
}

export interface DropdownContextProviderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue: string;
  onChange: (newValue: string) => void;
  children: ReactNode;
}

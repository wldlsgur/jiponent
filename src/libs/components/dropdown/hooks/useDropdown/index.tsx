import { KeyboardEventHandler, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { UseDropDownProps } from './type';
import { useToggle, useClickAway } from '@/libs';

const useDropdown = ({ defaultValue, onChange }: UseDropDownProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const { isToggle, handleToggle, handleSetTrue, handleSetFalse } = useToggle(false);
  const ref = useClickAway<HTMLDivElement>(handleSetFalse);
  const onChangeRef = useRef(onChange);

  const handleValueChange = useCallback((newValue: ReactNode) => {
    onChangeRef.current(newValue);
    setSelectedValue(newValue);
  }, []);

  const handleDropdownKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      const { key } = event;

      if (key === 'ArrowUp') {
        handleSetFalse();
      }

      if (key === 'ArrowDown') {
        handleSetTrue();
      }
    },
    [handleSetFalse, handleSetTrue],
  );

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  return {
    ref,
    selectedValue,
    isToggle,
    handleValueChange,
    handleToggle,
    handleDropdownKeyDown,
  };
};

export default useDropdown;

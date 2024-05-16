import {
  KeyboardEventHandler,
  MouseEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as S from './style';
import { DropdownContextProps, DropdownContextProviderProps } from './type';
import { useToggle, useClickAway } from '@/libs';

export const DropdownContext = createContext<DropdownContextProps>({
  selectedValue: '',
  isToggle: false,
  handleValueChange: () => {},
  handleSetFalse: () => {},
  handleToggle: () => {},
  handleDropdownKeyDown: () => {},
});

export const useDropdownContext = () => useContext(DropdownContext);

export const DropdownContextProvider = ({
  defaultValue,
  onChange,
  children,
  ...rest
}: DropdownContextProviderProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const { isToggle, handleToggle, handleSetTrue, handleSetFalse } = useToggle(false);
  const ref = useClickAway<HTMLDivElement>(handleSetFalse);
  const onChangeRef = useRef(onChange);

  const handleValueChange = useCallback(
    (event: MouseEvent<HTMLLIElement>, newValue: string) => {
      onChangeRef.current(newValue);
      setSelectedValue(newValue);
      handleSetFalse();
      event.stopPropagation();
    },
    [handleSetFalse],
  );

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

  const value = useMemo(
    () => ({
      selectedValue,
      isToggle,
      handleValueChange,
      handleSetFalse,
      handleToggle,
      handleDropdownKeyDown,
    }),
    [
      selectedValue,
      isToggle,
      handleValueChange,
      handleSetFalse,
      handleToggle,
      handleDropdownKeyDown,
    ],
  );

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  return (
    <DropdownContext.Provider value={value}>
      <S.Wrapper
        ref={ref}
        role='button'
        tabIndex={0}
        onClick={handleToggle}
        onKeyDown={handleDropdownKeyDown}
        {...rest}
      >
        {children}
      </S.Wrapper>
    </DropdownContext.Provider>
  );
};

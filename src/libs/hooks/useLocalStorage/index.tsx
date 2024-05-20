import { useCallback, useEffect, useRef, useState } from 'react';
import { Props } from './type';

const useLocalStorage = <T,>({ key, defaultValue, onError }: Props<T>) => {
  const onErrorRef = useRef(onError);
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      onErrorRef.current(error as Error);
      return defaultValue;
    }
  });

  const setItem = useCallback(
    (newValue: T) => {
      try {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        onErrorRef.current(error as Error);
      }
    },
    [key],
  );

  const removeItem = useCallback(() => {
    setValue(defaultValue);
    localStorage.removeItem(key);
  }, [defaultValue, key]);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  return { value, setItem, removeItem };
};

export default useLocalStorage;

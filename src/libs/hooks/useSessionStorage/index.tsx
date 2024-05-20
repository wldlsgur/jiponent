import { useCallback, useEffect, useRef, useState } from 'react';
import { Props } from './type';

const useSessionStorage = <T,>({ key, defaultValue, onError }: Props<T>) => {
  const onErrorRef = useRef(onError);
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = sessionStorage.getItem(key);

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
        sessionStorage.setItem(key, JSON.stringify(newValue));
      } catch (error) {
        onErrorRef.current(error as Error);
      }
    },
    [key],
  );

  const removeItem = useCallback(() => {
    setValue(defaultValue);
    sessionStorage.removeItem(key);
  }, [defaultValue, key]);

  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);

  return { value, setItem, removeItem };
};

export default useSessionStorage;

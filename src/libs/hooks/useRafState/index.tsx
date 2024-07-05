import { useCallback, useRef, useState } from 'react';

const useRafState = <T,>(defaultValue: T) => {
  const [state, setState] = useState(defaultValue);
  const frame = useRef(0);

  const setRafState = useCallback((value: T) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => setState(value));
  }, []);

  return { state, setRafState };
};

export default useRafState;

import { useCallback, useEffect, useRef, useState } from 'react';

const useHover = <T,>() => {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<T | null>(null);

  const mouseOverHandler = useCallback(() => {
    setIsHover(true);
  }, []);
  const mouseOutHandler = useCallback(() => {
    setIsHover(false);
  }, []);

  useEffect(() => {
    const element = ref.current;

    if (!element || !(element instanceof HTMLElement)) {
      return;
    }

    element.addEventListener('mouseover', mouseOverHandler);
    element.addEventListener('mouseout', mouseOutHandler);

    return () => {
      element.removeEventListener('mouseover', mouseOverHandler);
      element.removeEventListener('mouseout', mouseOutHandler);
    };
  }, [mouseOutHandler, mouseOverHandler, ref]);

  return { ref, isHover };
};

export default useHover;

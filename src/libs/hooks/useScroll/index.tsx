import { useEffect, useRef } from 'react';
import useRafState from '../useRafState';

const useScroll = <T,>() => {
  const { state, setRafState } = useRafState<{ x: number; y: number }>({ x: 0, y: 0 });
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || !(element instanceof HTMLElement)) {
      return;
    }

    const scrollHandler = () => {
      setRafState({
        x: element.scrollLeft,
        y: element.scrollTop,
      });
    };

    element.addEventListener('scroll', scrollHandler, { passive: true });

    return () => {
      element.removeEventListener('scroll', scrollHandler);
    };
  }, [ref, setRafState]);

  return { ref, state };
};

export default useScroll;

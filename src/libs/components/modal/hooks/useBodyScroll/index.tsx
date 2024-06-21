import { useEffect } from 'react';

const useBodyScroll = (visible: boolean) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    }

    if (!visible) {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);
};

export default useBodyScroll;

import { useEffect, useRef, useState } from 'react';
import { UseLazyLoadingPros } from './type';

const LOAD_IMG_EVENT_TYPE = 'loadImage';
let observer = null;

const onIntersection = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

const useLazyLoading = ({ lazy, threshold }: UseLazyLoadingPros) => {
  const [loaded, setLoaded] = useState(!lazy);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!lazy) {
      return;
    }

    const imgElement = ref.current;
    const handleLoadImage = () => setLoaded(true);

    imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);

    return () => {
      imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) {
      return;
    }

    observer = new IntersectionObserver(onIntersection, { threshold });
    ref.current && observer.observe(ref.current);
  }, [lazy, threshold]);

  return { ref, loaded };
};

export default useLazyLoading;

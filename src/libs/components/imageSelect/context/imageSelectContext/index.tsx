import {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ImageSelectContextProps, ImageSelectContextProviderProps } from './type';

export const ImageSelectContext = createContext<ImageSelectContextProps>({
  images: [],
  handleImageSelect: () => {},
  handleRemoveImage: () => {},
});

export const useImageSelectContext = () => useContext(ImageSelectContext);

export const ImageSelectContextProvider = ({
  limit = 1,
  onChange,
  onExceed,
  children,
}: ImageSelectContextProviderProps) => {
  const [images, setImages] = useState<File[]>([]);
  const onChangeRef = useRef(onChange);
  const onExceedRef = useRef(onExceed);

  const handleImageSelect = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const selectedImages = event.target.files;

      if (!selectedImages) {
        return;
      }

      if (selectedImages.length > limit) {
        return onExceedRef.current && onExceedRef.current();
      }

      const imagesArray = Array.from(selectedImages);

      onChangeRef.current(imagesArray);
      setImages(imagesArray);
    },
    [limit],
  );

  const handleRemoveImage = useCallback(
    (selectedImage: File) => {
      const newImagesArray = images.filter((image) => image !== selectedImage);

      onChangeRef.current(newImagesArray);
      setImages(newImagesArray);
    },
    [images],
  );

  const value = useMemo(
    () => ({
      images,
      handleImageSelect,
      handleRemoveImage,
    }),
    [images, handleImageSelect, handleRemoveImage],
  );

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    onExceedRef.current = onExceed;
  }, [onExceed]);

  return <ImageSelectContext.Provider value={value}>{children}</ImageSelectContext.Provider>;
};

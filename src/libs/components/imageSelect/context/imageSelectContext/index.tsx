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
  handleClearImage: () => {},
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

      const selectedImagesArray = Array.from(selectedImages);
      const filteredImages = images
        .filter(
          (image) =>
            !selectedImagesArray.some(
              (selectedImage) =>
                selectedImage.name === image.name &&
                selectedImage.lastModified === image.lastModified,
            ),
        )
        .concat(selectedImagesArray);

      if (filteredImages.length > limit) {
        return onExceedRef.current && onExceedRef.current();
      }

      onChangeRef.current(filteredImages);
      setImages(filteredImages);
    },
    [limit, images],
  );

  const handleRemoveImage = useCallback(
    (selectedImage: File) => {
      const newImagesArray = images.filter((image) => image !== selectedImage);

      onChangeRef.current(newImagesArray);
      setImages(newImagesArray);
    },
    [images],
  );

  const handleClearImage = useCallback(() => {
    onChangeRef.current([]);
    setImages([]);
  }, []);

  const value = useMemo(
    () => ({
      images,
      handleImageSelect,
      handleRemoveImage,
      handleClearImage,
    }),
    [images, handleImageSelect, handleRemoveImage, handleClearImage],
  );

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    onExceedRef.current = onExceed;
  }, [onExceed]);

  return <ImageSelectContext.Provider value={value}>{children}</ImageSelectContext.Provider>;
};

import { ChangeEvent, ReactNode } from 'react';

export interface ImageSelectContextProps {
  images: File[];
  handleImageSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: (selectedImage: File) => void;
}

export interface ImageSelectContextProviderProps {
  children: ReactNode;
  limit?: number;
  onChange: (images: File[]) => void;
  onExceed?: () => void;
}

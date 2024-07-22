import { ChangeEvent, useId, useRef } from 'react';
import { useImageSelectContext } from '../context/imageSelectContext';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const ImageSelectLabel = ({
  children,
  visible = true,
  multiple = false,
  className,
  ...rest
}: Props) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleImageSelect } = useImageSelectContext();
  const labelClass = `${S.default.label} ${visible ? '' : S.default.hidden}`;

  const handleImageSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleImageSelect(event);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <label
        htmlFor={id}
        className={combineClassName(labelClass, className)}
        {...rest}
      >
        {children}
      </label>
      <input
        type='file'
        accept='image/png, image/jpeg, image/avif, image/webp'
        id={id}
        ref={inputRef}
        multiple={multiple}
        className={S.default.input}
        onChange={handleImageSelectionChange}
      />
    </>
  );
};

export default ImageSelectLabel;

import { ChangeEvent, useId, useRef } from 'react';
import { useImageSelectContext } from '../context/imageSelectContext';
import * as S from './style';
import { Props } from './type';

const ImageSelectLabel = ({ children, visible = true, multiple = false, ...rest }: Props) => {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleImageSelect } = useImageSelectContext();

  const handleImageSelectionChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleImageSelect(event);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <S.Label
        htmlFor={id}
        $visible={visible}
        {...rest}
      >
        {children}
      </S.Label>
      <S.Input
        id={id}
        ref={inputRef}
        multiple={multiple}
        onChange={handleImageSelectionChange}
      />
    </>
  );
};

export default ImageSelectLabel;

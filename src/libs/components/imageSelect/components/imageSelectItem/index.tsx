import { useImageSelectContext } from '../../context/imageSelectContext';
import * as S from './style.module.css';
import { Props } from './type';

const ImageSelectItem = ({ imageFile, alt, ...rest }: Props) => {
  const { handleRemoveImage } = useImageSelectContext();

  return (
    <button
      type='button'
      className={S.default.button}
      onClick={() => handleRemoveImage(imageFile)}
    >
      <img
        src={URL.createObjectURL(imageFile)}
        alt={alt}
        {...rest}
      />
    </button>
  );
};

export default ImageSelectItem;

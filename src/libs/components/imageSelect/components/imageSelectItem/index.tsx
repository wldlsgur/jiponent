import { useImageSelectContext } from '../../context/imageSelectContext';
import * as S from './style';
import { Props } from './type';

const ImageSelectItem = ({ imageFile, alt, ...rest }: Props) => {
  const { handleRemoveImage } = useImageSelectContext();

  return (
    <S.Image
      src={URL.createObjectURL(imageFile)}
      onClick={() => handleRemoveImage(imageFile)}
      alt={alt}
      {...rest}
    />
  );
};

export default ImageSelectItem;

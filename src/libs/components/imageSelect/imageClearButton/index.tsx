import { useImageSelectContext } from '../context/imageSelectContext';
import { Props } from './type';

const ImageClearButton = ({ children, ...rest }: Props) => {
  const { handleClearImage } = useImageSelectContext();

  return (
    <button
      type='button'
      onClick={handleClearImage}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ImageClearButton;

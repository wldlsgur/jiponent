import { useImageSelectContext } from '../context/imageSelectContext';
import { Button } from './style';
import { Props } from './type';

const ImageClearButton = ({ children, ...rest }: Props) => {
  const { handleClearImage } = useImageSelectContext();

  return (
    <Button
      onClick={handleClearImage}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ImageClearButton;

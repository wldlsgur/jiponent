import ImageSelectItem from '../components/imageSelectItem';
import { useImageSelectContext } from '../context/imageSelectContext';
import { Props } from './type';

const ImageSelectView = ({ alt, ...rest }: Props) => {
  const { images } = useImageSelectContext();

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ImageSelectItem
      imageFile={images[0]}
      alt={alt}
      {...rest}
    />
  );
};

export default ImageSelectView;

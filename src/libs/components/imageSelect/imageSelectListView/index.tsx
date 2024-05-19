import ImageSelectItem from '../components/imageSelectItem';
import { useImageSelectContext } from '../context/imageSelectContext';
import * as S from './style';
import { Props } from './type';

const ImageSelectListView = ({ alt, listRest, itemRest, ...rest }: Props) => {
  const { images } = useImageSelectContext();

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <S.List {...listRest}>
      {images.map((image) => {
        return (
          <S.Item
            key={image.lastModified}
            {...itemRest}
          >
            <ImageSelectItem
              imageFile={image}
              alt={alt}
              {...rest}
            />
          </S.Item>
        );
      })}
    </S.List>
  );
};

export default ImageSelectListView;

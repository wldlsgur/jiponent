import ImageSelectItem from '../components/imageSelectItem';
import { useImageSelectContext } from '../context/imageSelectContext';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const ImageSelectListView = ({ alt, ulAttribute, liAttribute, imgAttribute }: Props) => {
  const { images } = useImageSelectContext();
  const { className: ulClassName, ...restUlAttribute } = ulAttribute || {};
  const { className: liClassName, ...restLiAttribute } = liAttribute || {};

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <ul
      className={combineClassName(S.default.list, ulClassName)}
      {...restUlAttribute}
    >
      {images.map((image) => {
        return (
          <li
            key={`${image.name}-${image.lastModified}`}
            className={combineClassName(S.default.item, liClassName)}
            {...restLiAttribute}
          >
            <ImageSelectItem
              imageFile={image}
              alt={alt}
              {...imgAttribute}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageSelectListView;

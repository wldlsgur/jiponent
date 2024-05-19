import { ImageSelectContextProvider } from '../context/imageSelectContext';
import ImageSelectLabel from '../imageSelectLabel';
import ImageSelectListView from '../imageSelectListView';
import ImageSelectView from '../imageSelectView';
import * as S from './style';
import { Props } from './type';

const ImageSelectWrapper = ({ limit, onChange, onExceed, children, ...rest }: Props) => {
  return (
    <ImageSelectContextProvider
      limit={limit}
      onChange={onChange}
      onExceed={onExceed}
    >
      <S.Wrapper {...rest}>{children}</S.Wrapper>
    </ImageSelectContextProvider>
  );
};

ImageSelectWrapper.Label = ImageSelectLabel;
ImageSelectWrapper.View = ImageSelectView;
ImageSelectWrapper.ListView = ImageSelectListView;

export default ImageSelectWrapper;

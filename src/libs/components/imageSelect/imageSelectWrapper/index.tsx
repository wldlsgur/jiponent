import { ImageSelectContextProvider } from '../context/imageSelectContext';
import ImageClearButton from '../imageClearButton';
import ImageSelectLabel from '../imageSelectLabel';
import ImageSelectListView from '../imageSelectListView';
import ImageSelectView from '../imageSelectView';
import { Props } from './type';

const ImageSelectWrapper = ({ limit, onChange, onExceed, children, ...rest }: Props) => {
  return (
    <ImageSelectContextProvider
      limit={limit}
      onChange={onChange}
      onExceed={onExceed}
    >
      <div {...rest}>{children}</div>
    </ImageSelectContextProvider>
  );
};

ImageSelectWrapper.Label = ImageSelectLabel;
ImageSelectWrapper.View = ImageSelectView;
ImageSelectWrapper.ListView = ImageSelectListView;
ImageSelectWrapper.ClearButton = ImageClearButton;

export default ImageSelectWrapper;

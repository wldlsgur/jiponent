import { ImageSelectContextProvider } from '../context/imageSelectContext';
import ImageClearButton from '../imageSelectClearButton';
import ImageSelectLabel from '../imageSelectLabel';
import ImageSelectListView from '../imageSelectListView';
import ImageSelectView from '../imageSelectView';
import { Props } from './type';

const ImageSelectContainer = ({ limit, onChange, onExceed, children, ...rest }: Props) => {
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

ImageSelectContainer.Label = ImageSelectLabel;
ImageSelectContainer.View = ImageSelectView;
ImageSelectContainer.ListView = ImageSelectListView;
ImageSelectContainer.ClearButton = ImageClearButton;

export default ImageSelectContainer;

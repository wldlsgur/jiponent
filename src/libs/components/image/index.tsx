import useLazyLoading from './hooks/useLazyLoading';
import { Props } from './type';

const Image = ({
  width,
  height,
  lazy,
  placeholder,
  threshold = 0.5,
  src,
  alt,
  objectFit = 'none',
  ...rest
}: Props) => {
  const { ref, loaded } = useLazyLoading({ lazy, threshold });

  return (
    <img
      ref={ref}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ width, height, objectFit }}
      {...rest}
    />
  );
};

export default Image;

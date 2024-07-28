import Image from '../image';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Avatar = ({
  size = 70,
  radius = '50%',
  objectFit = 'cover',
  containerAttribute,
  ...rest
}: Props) => {
  const { className, style, ...restContainerAttribute } = containerAttribute || {};

  return (
    <div
      className={combineClassName(S.default.container, className)}
      style={{ ...style, borderRadius: radius, width: size, height: size }}
      {...restContainerAttribute}
    >
      <Image
        width='100%'
        height='100%'
        objectFit={objectFit}
        {...rest}
      />
    </div>
  );
};

export default Avatar;

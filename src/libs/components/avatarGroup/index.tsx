import { v4 as uuidv4 } from 'uuid';
import Avatar from '../avatar';
import { Props } from './type';

const AvatarGroup = ({ size = 70, margin = 5, list = [], ...rest }: Props) => {
  return (
    <div
      {...rest}
      style={{ ...rest.style, paddingLeft: size / margin }}
    >
      {list.map((props, index) => (
        <Avatar
          key={uuidv4()}
          {...props}
          containerAttribute={{
            ...props.containerAttribute,
            style: {
              ...props.containerAttribute?.style,
              marginLeft: -size / margin,
              zIndex: list.length - index,
            },
          }}
        />
      ))}
    </div>
  );
};

export default AvatarGroup;

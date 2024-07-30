import { Buffer } from 'buffer';
import { icons } from 'feather-icons';
import * as S from './style.module.css';
import { Props } from './type';

const Icon = ({
  name,
  size = 16,
  strokeWidth = 2,
  color = '#222',
  fill,
  rotate,
  style,
  ...rest
}: Props) => {
  const icon = icons[name];
  const svg = icon
    ? icon.toSvg({
        'stroke-width': strokeWidth,
        stroke: color,
        fill,
        width: size,
        height: size,
      })
    : '';
  const base64 = Buffer.from(svg, 'utf8').toString('base64');

  return (
    <i className={S.default.container}>
      <img
        src={`data:image/svg+xml;base64,${base64}`}
        alt={name}
        style={{
          ...style,
          transform: rotate ? `rotate(${rotate}deg)` : undefined,
        }}
        {...rest}
      />
    </i>
  );
};

export default Icon;

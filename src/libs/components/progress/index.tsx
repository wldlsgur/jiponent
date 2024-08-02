import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const Progress = ({
  value,
  height = '10px',
  railColor = '#aaa',
  trackColor = '#44b',
  gradientColor = 'rgba(255, 255, 255, 0.15)',
  animationDuration = '500ms',
  transitionDuration = '100ms',
  className,
  style,
  ...rest
}: Props) => {
  return (
    <div
      className={S.default.container}
      style={{ height }}
    >
      <div
        className={S.default.rail}
        style={{ backgroundColor: railColor }}
      />
      <div
        className={combineClassName(S.default.track, className)}
        style={{
          ...style,
          width: `${value}%`,
          backgroundColor: trackColor,
          backgroundImage: `linear-gradient(
              45deg,
              ${gradientColor} 25%,
              transparent 25%,
              transparent 50%,
              ${gradientColor} 50%,
              ${gradientColor} 75%,
              transparent 75%,
              transparent 100%
            )`,
          animationDuration,
          transitionDuration,
        }}
        {...rest}
      />
    </div>
  );
};

export default Progress;

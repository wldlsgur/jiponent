import * as S from './style.module.css';
import { Props } from './type';
import useToggle from '@/libs/hooks/useToggle';
import combineClassName from '@/libs/utils/combineClassName';

const Toggle = ({
  initialState = false,
  onToggle,
  disabled = false,
  inActiveColor = '#ccc',
  activeColor = 'lightgreen',
  className,
  style,
  ...rest
}: Props) => {
  const { isToggle, handleToggle } = useToggle(initialState);

  const handleChange = () => {
    handleToggle();
    onToggle && onToggle(!isToggle);
  };

  return (
    <label className={S.default.container}>
      <input
        type='checkbox'
        className={S.default.input}
        checked={isToggle}
        onClick={handleChange}
        disabled={disabled}
        hidden
      />
      <div
        className={combineClassName(S.default.switch, className)}
        style={{ ...style, backgroundColor: isToggle ? activeColor : inActiveColor }}
        {...rest}
      />
    </label>
  );
};

export default Toggle;

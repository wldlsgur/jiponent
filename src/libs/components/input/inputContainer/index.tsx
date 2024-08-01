import InputErrorMessage from '../inputErrorMessage';
import InputLabel from '../inputLabel';
import InputText from '../inputText';
import * as S from './style.module.css';
import { Props } from './type';
import combineClassName from '@/libs/utils/combineClassName';

const InputContainer = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={combineClassName(S.default.container, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

InputContainer.Text = InputText;
InputContainer.Label = InputLabel;
InputContainer.ErrorMessage = InputErrorMessage;

export default InputContainer;

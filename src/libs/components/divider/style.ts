import styled from 'styled-components';
import { TDivider } from './type';

export const Divider = styled.hr<{ $direction: TDivider }>`
  border: none;
  background-color: #d1d5db;
  ${({ $direction }) =>
    $direction === 'horizontal'
      ? `
        display: block;
        width: 100%;
        height: 1px;
      `
      : `
        display: inline-block;
        width: 1px;
        height: 1rem;
        vertical-align: middle;
      `}
`;

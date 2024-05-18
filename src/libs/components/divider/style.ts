import styled, { css } from 'styled-components';
import { TDivider } from './type';

const horizontal = css`
  display: block;
  width: 100%;
  height: 1px;
`;
const vertical = css`
  display: inline-block;
  width: 1px;
  height: 1rem;
  vertical-align: middle;
`;

export const Divider = styled.hr<{ $direction: TDivider }>`
  border: none;
  background-color: #d1d5db;
  ${({ $direction }) => ($direction === 'horizontal' ? horizontal : vertical)}
`;

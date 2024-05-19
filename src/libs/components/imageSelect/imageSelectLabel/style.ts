import styled from 'styled-components';

export const Label = styled.label<{ $visible: boolean }>`
  cursor: pointer;
  display: ${({ $visible }) => ($visible ? 'inline-block' : 'none')};
`;

export const Input = styled.input.attrs({
  type: 'file',
  accept: 'image/png, image/jpeg, image/avif, image/webp',
})`
  display: none;
`;

import styled from 'styled-components';

export const DropdownList = styled.ul<{ $visible: boolean }>`
  display: ${({ $visible }) => (!$visible ? 'none' : 'block')};
  padding: 0;
`;

export const DropdownItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 1rem 0;
`;

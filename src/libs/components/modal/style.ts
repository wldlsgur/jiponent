import styled from 'styled-components';

export interface BackgroundProps {
  $visible: boolean;
  $backgroundColor?: string;
  $zIndex?: number;
}

export const Background = styled.div<BackgroundProps>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${({ $zIndex }) => ($zIndex || 999)};
  width: 100dvw;
  height: 100dvh;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || '#23232390'};
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  scroll-behavior: auto;
`;

export const Container = styled.article``;

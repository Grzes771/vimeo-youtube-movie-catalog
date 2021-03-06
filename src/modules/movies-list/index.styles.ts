import styled from 'styled-components';
import { EDisplayTypeKeys } from 'types/video-list-context-enums';

export const MovieContainer = styled.div<{ displayType: EDisplayTypeKeys }>`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: ${({ displayType }) =>
    displayType === EDisplayTypeKeys.TILES ? 'center' : 'center'};
  align-items: center;
  margin: ${({ displayType }) =>
    displayType === EDisplayTypeKeys.TILES ? 'auto' : '0px 5% 0px 5%'};
  flex-wrap: wrap;
`;
export const Container = styled.div`
  min-height: 600px;
`;

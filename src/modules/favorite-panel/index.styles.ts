import styled from 'styled-components';

import { EVideosListTypeKeys } from 'types/video-list-context-enums';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  height: 90px;
  max-width: 1200px;
  background-color: rgba(36, 172, 255, 0.7);
  margin: 0px auto 20px auto;

  @media (max-width: 340px) {
    justify-content: space-around;
    margin: auto;
  }
`;

export const StyledButton = styled.button<{
  listType: EVideosListTypeKeys;
  id: EVideosListTypeKeys;
}>`
  outline: ${({ listType, id }) =>
    listType === id ? '2px solid white !important' : 'none'};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 35px;
  margin-right: 30px;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border-radius: 0.25rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.3)) top/100% 800%;
  padding: 0.5rem 0.9rem;

  background-color: rgba(25, 135, 84);

  &:hover {
    background-position: bottom;
    transition: 0.4s;
  }
  &:focus {
    background-position: bottom;
    transition: 0.1s;
  }
  @media (max-width: 340px) {
    margin-right: 0;
  }
`;

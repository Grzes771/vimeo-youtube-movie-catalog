import { getType } from 'typesafe-actions';
import { Action } from '../types/actions';
import { TVideosArrItem } from '../types/movie-item';
import { setVideoDetailsStarted, setModalActiveStarted } from './actions';

export type TVideoModalDataState = {
  isOpen: boolean;
  videoDetails: TVideosArrItem | null;
  isError: string;
  isLoading: boolean;
};

export const initialState: TVideoModalDataState = {
  isOpen: false,
  videoDetails: null,
  isError: '',
  isLoading: false,
};

export const videoModal = (
  state = initialState,
  action: Action
): TVideoModalDataState => {
  switch (action.type) {
    case getType(setModalActiveStarted):
      return {
        ...state,
        isOpen: action.payload.value,
      };

    case getType(setVideoDetailsStarted):
      return {
        ...state,
        videoDetails: action.payload.video,
      };
    default:
      return { ...state };
  }
};

import { Action } from "redux";

// Define the action payload interface
interface FullScreenPayload {
  isOpen: boolean;
  params?: {
    index: number;
  };
  photos: string[];
}

// Define the action type
export interface SetFullScreenAction extends Action {
  type: string;
  payload: FullScreenPayload;
  [key: string]: any;
}

// Action type constant
export const SET_FULL_SCREEN = "SET_FULL_SCREEN";

// Action creator function
export const setFullScreen = (
  value: FullScreenPayload
): SetFullScreenAction => {
  return {
    type: SET_FULL_SCREEN,
    payload: value,
  };
};

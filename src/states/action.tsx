import { type Action } from "redux";
interface SetFullScreenAction extends Action {
  type: string;
  payload: boolean;
}

export const SET_FULL_SCREEN = "SET_FULL_SCREEN";

export const setFullScreen = (value: boolean): SetFullScreenAction => {
  return {
    type: SET_FULL_SCREEN,
    payload: value,
  };
};

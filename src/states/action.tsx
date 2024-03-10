export const SET_FULL_SCREEN = 'SET_FULL_SCREEN';

export const setFullScreen = (value) => {
  return {
    type: SET_FULL_SCREEN,
    payload: value,
  };
};

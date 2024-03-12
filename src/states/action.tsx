

export const SET_FULL_SCREEN = 'SET_FULL_SCREEN';

export const setFullScreen = (value: any) => {
  return {
    type: SET_FULL_SCREEN,
    payload: value,
  };
};

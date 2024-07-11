import { createStore, combineReducers, type Action } from "redux";

interface PhotoState {
  fullScreen: {
    isOpen: boolean;
    params: string;
    photos: string[];
  };
}

interface SetFullScreenAction extends Action {
  type: "SET_FULL_SCREEN";
  payload: {
    isOpen: boolean;
    params: string;
    photos: string[];
  };
}

const initialPhotoState: PhotoState = {
  fullScreen: { isOpen: false, params: "", photos: [] },
};

function generalStates(
  state: PhotoState = initialPhotoState,
  action: SetFullScreenAction,
): PhotoState {
  switch (action.type) {
    case "SET_FULL_SCREEN":
      return {
        ...state,
        fullScreen: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  generalStates,
});

const store = createStore(rootReducer);

export default store;

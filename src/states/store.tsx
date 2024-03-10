// store.ts

import { createStore, combineReducers } from "redux";

const initialPhotoState = {
  fullScreen: { isOpen: false, params: "" },
};

function generalStates(state = initialPhotoState, action) {
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
  generalStates: generalStates,
});

const store = createStore(rootReducer);

export default store;

import { LOADING_EVENTS, EVENTS_LOADED } from "../actions/type";

const INITIAL_STATE = {
  isLoading: true,
  events: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_EVENTS:
      return {
        ...state,
        isLoading: true
      };
    case EVENTS_LOADED:
      return {
        ...state,
        isLoading: false,
        events: [...action.payload]
      };
    default:
      return state;
  }
};

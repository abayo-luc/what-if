import { LOADING_EVENTS, EVENTS_LOADED } from "./type";

import axios from "axios";

export const allEvents = params => {
  return dispatch => {
    dispatch({ type: LOADING_EVENTS });
    axios
      .get("/api/events")
      .then(res => {
        const {
          data: { events }
        } = res;
        dispatch({ type: EVENTS_LOADED, payload: events });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

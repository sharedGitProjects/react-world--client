import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CREATE_WORLD_SUCCESS,
  CREATE_WORLD_FAIL,
  EVENT_SUCCESS,
  UPDATE_WORLD,
} from "../consts/const";

const initialState = {
  name: "",
  error: "",
  isFetching: false,
  map: {},
  events: [],
};

export default function worldReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return { ...state, isFetching: true, error: "" };

  case UPDATE_WORLD:
  case CREATE_WORLD_SUCCESS:
  case LOGIN_SUCCESS:
    return {
      ...state,
      isFetching: false,
      name: action.payload.user,
      map: action.payload.map,
      events: action.payload.events,
    };

  case EVENT_SUCCESS:
    return { ...state, isFetching: false, event: action.payload };

  case CREATE_WORLD_FAIL:
  case LOGIN_FAIL:
    return { ...state, isFetching: false, error: action.payload.message };

  default:
    return state;
  }
}

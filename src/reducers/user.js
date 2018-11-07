import {
 LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CREATE_WORLD_SUCCESS, CREATE_WORLD_FAIL 
} from "../consts/const";

const initialState = {
  name: "",
  error: "",
  isFetching: false,
  events: [],
};

export default function initReducer(state = initialState, action) {
  switch (action.type) {
  case LOGIN_REQUEST:
    return { ...state, isFetching: true, error: "" };

  case CREATE_WORLD_SUCCESS:
  case LOGIN_SUCCESS:
    return {
      ...state,
      isFetching: false,
      name: action.payload.user,
      events: action.payload.events,
    };

  case CREATE_WORLD_FAIL:
  case LOGIN_FAIL:
    return { ...state, isFetching: false, error: action.payload.message };

  default:
    return state;
  }
}

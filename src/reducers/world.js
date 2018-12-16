import {
  GET_WORLD_REQUEST,
  GET_WORLD_SUCCESS,
  GET_WORLD_FAIL,
  CREATE_WORLD_SUCCESS,
  CREATE_WORLD_FAIL,
  EVENT_SUCCESS,
  UPDATE_WORLD,
} from "../consts/actions";

const initialState = {
  name: "",
  error: "",
  isFetching: false,
  map: {},
  events: [],
};

export default function worldReducer(state = initialState, action) {
  switch (action.type) {
  case GET_WORLD_REQUEST:
    return { ...state, isFetching: true, error: "" };

  case UPDATE_WORLD:
    return {
      ...state,
      isFetching: false,
      name: action.payload.name,
      map: action.payload.newMap,
      events: action.payload.events,
    };

  case CREATE_WORLD_SUCCESS:
    return {
      ...state,
      isFetching: false,
      name: action.payload.user,
      map: action.payload.map,
      events: action.payload.events,
    };

  case GET_WORLD_SUCCESS:
    return {
      ...state,
      isFetching: false,
      name: action.payload.user,
      map: action.payload.map,
      events: action.payload.events,
    };

  case EVENT_SUCCESS:
    if (action.payload.time) {
      return {
        ...state,
        isFetching: false,
        map: {
          ...state.map,
          time: action.payload.time,
        },
      };
    } else {
      return { ...state, isFetching: false };
    }

  case CREATE_WORLD_FAIL:
    return { ...state, isFetching: false, error: action.payload.message };

  case GET_WORLD_FAIL:
    return { ...state, isFetching: false, error: action.payload.message };

  default:
    return state;
  }
}

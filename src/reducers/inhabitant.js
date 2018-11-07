import { EVENT_SUCCESS } from "../consts/const";

const initialState = {
  name: "",
  error: "",
  isFetching: false,
  map: {},
  events: [],
  inhabitant: {},
};

export default function inhabitantReducer(state = initialState, action) {
  switch (action.type) {
  case EVENT_SUCCESS:
    return { ...state, isFetching: false, events: action.payload };

  default:
    return state;
  }
}

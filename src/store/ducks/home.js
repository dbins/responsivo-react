/**
 * Types & Creators
 */

export const Types = {
  HOME_REQUEST: "home/HOME_REQUEST",
  HOME_SUCCESS: "home/HOME_SUCCESS",
  HOME_FAILURE: "home/HOME_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.HOME_REQUEST:
      return {
        ...state
      };
    case Types.HOME_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case Types.HOME_FAILURE:
      return {
        ...state,
        data: [],
        error: true,
        loading: false
      };
    default:
      return state;
  }
}

export const Creators = {
  homeRequest: () => ({
    type: Types.HOME_REQUEST,
    payload: {}
  }),
  homeSuccess: data => ({ type: Types.HOME_SUCCESS, payload: data }),
  homeFailure: data => ({ type: Types.HOME_FAILURE, payload: data })
};

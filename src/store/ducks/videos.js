/**
 * Types & Creators
 */

export const Types = {
  VIDEOS_REQUEST: "videos/VIDEOS_REQUEST",
  VIDEOS_SUCCESS: "videos/VIDEOS_SUCCESS",
  VIDEOS_FAILURE: "videos/VIDEOS_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function videos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.VIDEOS_REQUEST:
      return {
        ...state
      };
    case Types.VIDEOS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case Types.VIDEOS_FAILURE:
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
  videosRequest: () => ({
    type: Types.VIDEOS_REQUEST,
    payload: {}
  }),
  videosSuccess: data => ({ type: Types.VIDEOS_SUCCESS, payload: data }),
  videosFailure: data => ({ type: Types.VIDEOS_FAILURE, payload: data })
};

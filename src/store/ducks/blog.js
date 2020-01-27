/**
 * Types & Creators
 */

export const Types = {
  BLOG_REQUEST: "blog/BLOG_REQUEST",
  BLOG_SUCCESS: "blog/BLOG_SUCCESS",
  BLOG_FAILURE: "blog/BLOG_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function blog(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.BLOG_REQUEST:
      return {
        ...state
      };
    case Types.BLOG_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case Types.BLOG_FAILURE:
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
  blogRequest: () => ({
    type: Types.BLOG_REQUEST,
    payload: {}
  }),
  blogSuccess: data => ({ type: Types.BLOG_SUCCESS, payload: data }),
  blogFailure: data => ({ type: Types.BLOG_FAILURE, payload: data })
};

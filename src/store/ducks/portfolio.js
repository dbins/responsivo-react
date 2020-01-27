/**
 * Types & Creators
 */

export const Types = {
  PORTFOLIO_REQUEST: "portfolio/PORTFOLIO_REQUEST",
  PORTFOLIO_SUCCESS: "portfolio/PORTFOLIO_SUCCESS",
  PORTFOLIO_FAILURE: "portfolio/PORTFOLIO_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function portfolio(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.PORTFOLIO_REQUEST:
      return {
        ...state
      };
    case Types.PORTFOLIO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case Types.PORTFOLIO_FAILURE:
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
  portfolioRequest: () => ({
    type: Types.PORTFOLIO_REQUEST,
    payload: {}
  }),
  portfolioSuccess: data => ({
    type: Types.PORTFOLIO_SUCCESS,
    payload: data
  }),
  portfolioFailure: data => ({
    type: Types.PORTFOLIO_FAILURE,
    payload: data
  })
};

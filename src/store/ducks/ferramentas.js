/**
 * Types & Creators
 */

export const Types = {
  FERRAMENTAS_REQUEST: "ferramentas/FERRAMENTAS_REQUEST",
  FERRAMENTAS_SUCCESS: "ferramentas/FERRAMENTAS_SUCCESS",
  FERRAMENTAS_FAILURE: "ferramentas/FERRAMENTAS_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function ferramentas(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FERRAMENTAS_REQUEST:
      return {
        ...state
      };
    case Types.FERRAMENTAS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case Types.FERRAMENTAS_FAILURE:
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
  ferramentasRequest: () => ({
    type: Types.FERRAMENTAS_REQUEST,
    payload: {}
  }),
  ferramentasSuccess: data => ({
    type: Types.FERRAMENTAS_SUCCESS,
    payload: data
  }),
  ferramentasFailure: data => ({
    type: Types.FERRAMENTAS_FAILURE,
    payload: data
  })
};

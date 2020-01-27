/**
 * Types & Creators
 */

export const Types = {
  CONTATO_REQUEST: "contato/CONTATO_REQUEST",
  CONTATO_SUCCESS: "contato/CONTATO_SUCCESS",
  CONTATO_FAILURE: "contato/CONTATO_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function contato(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CONTATO_REQUEST:
      return {
        ...state
      };
    case Types.CONTATO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case Types.CONTATO_FAILURE:
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
  contatoRequest: data => ({
    type: Types.CONTATO_REQUEST,
    payload: data
  }),
  contatoSuccess: data => ({ type: Types.CONTATO_SUCCESS, payload: data }),
  contatoFailure: data => ({ type: Types.CONTATO_FAILURE, payload: data })
};

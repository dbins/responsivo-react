/**
 * Types & Creators
 */

export const Types = {
  APLICATIVOS_REQUEST: "aplicativos/APLICATIVOS_REQUEST",
  APLICATIVOS_SUCCESS: "aplicativos/APLICATIVOS_SUCCESS",
  APLICATIVOS_FAILURE: "aplicativos/APLICATIVOS_FAILURE"
};

/**
 * Initial State
 */
export const INITIAL_STATE = {
  data: [],
  error: false,
  loading: false
};

export default function aplicativos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.APLICATIVOS_REQUEST:
      return {
        ...state
      };
    case Types.APLICATIVOS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false
      };
    case Types.APLICATIVOS_FAILURE:
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
  aplicativosRequest: () => ({
    type: Types.APLICATIVOS_REQUEST,
    payload: {}
  }),
  aplicativosSuccess: data => ({
    type: Types.APLICATIVOS_SUCCESS,
    payload: data
  }),
  aplicativosFailure: data => ({
    type: Types.APLICATIVOS_FAILURE,
    payload: data
  })
};

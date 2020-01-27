import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as ContatoActions } from "../ducks/contato";

export function* contato(data) {
  try {
    const resultado = yield call(api.post, "contato", {});

    if (resultado.status === 200) {
      const data = resultado.data;
      if (data.token) {
        yield put(ContatoActions.contatoSuccess(data));
        yield call(history.push, "/contato");
      } else {
        yield put(ContatoActions.contatoFailure({}));
      }
    } else {
      yield put(ContatoActions.contatoFailure({}));
    }
  } catch (err) {
    yield put(ContatoActions.contatoFailure(err));
  }
}


import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as AplicativosActions } from "../ducks/aplicativos";

export function* aplicativos(data) {
  const items = [
    {
      id: 1,
      image: "imagem1.png",
      caption: "Aplicativo 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 2,
      image: "imagem1.png",
      caption: "Aplicativo 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 3,
      image: "imagem1.png",
      caption: "Aplicativo 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 4,
      image: "imagem1.png",
      caption: "Aplicativo 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 5,
      image: "imagem1.png",
      caption: "Aplicativo 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 6,
      image: "imagem1.png",
      caption: "Aplicativo 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    }
  ];
  yield put(AplicativosActions.aplicativosSuccess(items));

  //try {
  //  const resultado = yield call(api.post, "aplicativos");

  //  if (resultado.status === 200) {
  //    const data = resultado.data;
  //    if (data.token) {
  //      yield put(AplicativosActions.aplicativosSuccess(data));
  //      yield call(history.push, "/aplicativos");
  //    } else {
  //      yield put(AplicativosActions.aplicativosFailure({}));
  //    }
  //  } else {
  //    yield put(AplicativosActions.aplicativosFailure({}));
  //  }
  //} catch (err) {
  //  yield put(AplicativosActions.aplicativosFailure(err));
  //}
}

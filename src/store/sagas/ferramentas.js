import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as FerramentasActions } from "../ducks/ferramentas";

export function* ferramentas() {
  const items = [
    {
      id: 1,
      image: "imagem1.png",
      caption: "Ferramentas 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 2,
      image: "imagem1.png",
      caption: "Ferramentas 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 3,
      image: "imagem1.png",
      caption: "Ferramentas 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 4,
      image: "imagem1.png",
      caption: "Ferramentas 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 5,
      image: "imagem1.png",
      caption: "Ferramentas 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 6,
      image: "imagem1.png",
      caption: "Ferramentas 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    }
  ];
  yield put(FerramentasActions.ferramentasSuccess(items));

  //try {
  //  const resultado = yield call(api.post, "ferramentas");

  //  if (resultado.status === 200) {
  //    const data = resultado.data;
  //    if (data.token) {
  //      yield put(FerramentasActions.ferramentasSuccess(data));
  //      yield call(history.push, "/ferramentas");
  //    } else {
  //      yield put(FerramentasActions.ferramentasFailure({}));
  //    }
  //  } else {
  //    yield put(FerramentasActions.ferramentasFailure({}));
  //  }
  //} catch (err) {
  //  yield put(FerramentasActions.ferramentasFailure(err));
  //}
}

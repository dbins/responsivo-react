import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as HomeActions } from "../ducks/home";

export function* home() {
  const items2 = [
    {
      id: 1,
      image: "imagem1.png",
      caption: "Portfólio 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 2,
      image: "imagem1.png",
      caption: "Portfólio 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 3,
      image: "imagem1.png",
      caption: "Portfólio 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    }
  ];
  yield put(HomeActions.homeSuccess(items2));
  //try {
  //  const resultado = yield call(api.post, "home");

  //  if (resultado.status === 200) {
  //    const data = resultado.data;
  //    if (data.token) {
  //      yield put(HomeActions.homeSuccess(data));
  //      yield call(history.push, "/home");
  //    } else {
  //      yield put(HomeActions.homeFailure({}));
  //    }
  //  } else {
  //    yield put(HomeActions.homeFailure({}));
  //  }
  //} catch (err) {
  //  yield put(HomeActions.homeFailure(err));
  //}
}

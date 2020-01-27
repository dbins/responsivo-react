import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as PortfolioActions } from "../ducks/portfolio";

export function* portfolio() {
  const items = [
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
    },
    {
      id: 4,
      image: "imagem1.png",
      caption: "Portfólio 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 5,
      image: "imagem1.png",
      caption: "Portfólio 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 6,
      image: "imagem1.png",
      caption: "Portfólio 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    }
  ];
  yield put(PortfolioActions.portfolioSuccess(items));
  //try {
  //  const resultado = yield call(api.post, "portfolio");
  //  if (resultado.status === 200) {
  //    const data = resultado.data;
  //    if (data.token) {
  //      yield put(PortfolioActions.portfolioSuccess(data));
  //      yield call(history.push, "/portfolio");
  //    } else {
  //      yield put(PortfolioActions.portfolioFailure({}));
  //    }
  //  } else {
  //    yield put(PortfolioActions.portfolioFailure({}));
  //  }
  //} catch (err) {
  //  yield put(PortfolioActions.portfolioFailure(err));
  //}
}

import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as BlogActions } from "../ducks/blog";

export function* blog() {
  const items = [
    {
      id: 1,
      image: "imagem1.png",
      caption: "Blog 1",
      category: "SQL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 2,
      image: "imagem1.png",
      caption: "Blog 2",
      category: "SQL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 3,
      image: "imagem1.png",
      caption: "Blog 3",
      category: "SQL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 4,
      image: "imagem1.png",
      caption: "Blog 4",
      category: "SQL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 5,
      image: "imagem1.png",
      caption: "Blog 5",
      category: "SQL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 6,
      image: "imagem1.png",
      caption: "Blog 6",
      category: "SQL",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    }
  ];
  yield put(BlogActions.blogSuccess(items));

  //try {
  //  const resultado = yield call(api.post, "blog");

  //  if (resultado.status === 200) {
  //    const data = resultado.data;
  //    if (data.token) {
  //      yield put(BlogActions.blogSuccess(data));
  //      yield call(history.push, "/blog");
  //    } else {
  //      yield put(BlogActions.blogFailure({}));
  //    }
  //  } else {
  //    yield put(BlogActions.blogFailure({}));
  //  }
  //} catch (err) {
  //  yield put(BlogActions.blogFailure(err));
  //}
}

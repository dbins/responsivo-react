import { call, put } from "redux-saga/effects";
import api from "../../api";
import history from "../../routes/history";

import { Creators as VideosActions } from "../ducks/videos";

export function* videos() {
  const items = [
    {
      id: 1,
      image: "imagem1.png",
      caption: "Vídeo 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 2,
      image: "imagem1.png",
      caption: "Vídeo 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 3,
      image: "imagem1.png",
      caption: "Vídeo 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 4,
      image: "imagem1.png",
      caption: "Vídeo 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 5,
      image: "imagem1.png",
      caption: "Vídeo 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    },
    {
      id: 6,
      image: "imagem1.png",
      caption: "Vídeo 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nisi mauris. Nam at tortor iaculis, lacinia nulla ornare, consequat augue. Donec condimentum ante faucibus euismod bibendum."
    }
  ];
  yield put(VideosActions.videosSuccess(items));

  //try {
  //  const resultado = yield call(api.post, "videos");

  //  if (resultado.status === 200) {
  //    const data = resultado.data;
  //    if (data.token) {
  //      yield put(VideosActions.videosSuccess(data));
  //      yield call(history.push, "/videos");
  //    } else {
  //      yield put(VideosActions.videosFailure({}));
  //    }
  //  } else {
  //    yield put(VideosActions.videosFailure({}));
  //  }
  //} catch (err) {
  //  yield put(VideosActions.videosFailure(err));
  //}
}

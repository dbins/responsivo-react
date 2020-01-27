import { all, takeLatest } from "redux-saga/effects";
import { Types as HomeTypes } from "../ducks/home";
import { Types as PortfolioTypes } from "../ducks/portfolio";
import { Types as FerramentasTypes } from "../ducks/ferramentas";
import { Types as AplicativosTypes } from "../ducks/aplicativos";
import { Types as VideosTypes } from "../ducks/videos";
import { Types as BlogTypes } from "../ducks/blog";
import { Types as ContatoTypes } from "../ducks/contato";
import { home } from "./home";
import { contato } from "./contato";
import { blog } from "./blog";
import { ferramentas } from "./ferramentas";
import { videos } from "./videos";
import { aplicativos } from "./aplicativos";
import { portfolio } from "./portfolio";

export default function* rootSaga() {
  yield all([
    takeLatest(HomeTypes.HOME_REQUEST, home),
    takeLatest(ContatoTypes.CONTATO_REQUEST, contato),
    takeLatest(BlogTypes.BLOG_REQUEST, blog),
    takeLatest(FerramentasTypes.FERRAMENTAS_REQUEST, ferramentas),
    takeLatest(VideosTypes.VIDEOS_REQUEST, videos),
    takeLatest(AplicativosTypes.APLICATIVOS_REQUEST, aplicativos),
    takeLatest(PortfolioTypes.PORTFOLIO_REQUEST, portfolio)
  ]);
}

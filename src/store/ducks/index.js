import { combineReducers } from "redux";
import home from "./home";
import portfolio from "./portfolio";
import ferramentas from "./ferramentas";
import aplicativos from "./aplicativos";
import videos from "./videos";
import blog from "./blog";
import contato from "./contato";

export default combineReducers({
  home,
  portfolio,
  ferramentas,
  aplicativos,
  videos,
  blog,
  contato
});

import { combineReducers, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from "redux-devtools-extension"
import { i18nState } from "redux-i18n";
import thunk from "redux-thunk";
import user from "redux/modules/user";

const env = process.env.NODE_ENV;

const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  router: connectRouter(history),
  user,
  i18nState,
});

let store;

if(env === "development") {
    store = initialState =>
        createStore(
          reducer, 
          composeWithDevTools(applyMiddleware(...middlewares))
        );
} else {
    store = initialState =>
        createStore(reducer, applyMiddleware(...middlewares));
} 



export { history };

export default store();
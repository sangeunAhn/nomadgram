import { combineReducers, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import thunk from "redux-thunk";
import users from "redux/modules/users";
import Reactotron from "ReactotronConfig";

const env = process.env.NODE_ENV;

var history = require('history').createBrowserHistory;

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  router: connectRouter(history),
  users,
});

let store;

if(env === "development") {
    store = initialState =>
        Reactotron.createStore(reducer, applyMiddleware(...middlewares));
} else {
    store = initialState =>
        createStore(reducer, applyMiddleware(...middlewares));
} 



export { history };

export default store();
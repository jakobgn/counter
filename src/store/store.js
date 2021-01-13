import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import * as Sentry from "@sentry/react";

const sentryReduxEnhancer = Sentry.createReduxEnhancer({

});

const store = createStore(
  reducers,
  compose(composeWithDevTools(applyMiddleware()), sentryReduxEnhancer)
);


export default store;

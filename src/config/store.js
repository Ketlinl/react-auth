import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import { configureStore } from "@reduxjs/toolkit"
import createRootReducer from "../reducers";

export const history = createBrowserHistory();
const reducers = createRootReducer(history);

const middlewares = getDefaultMiddleware => {
  let defaultMiddlewares = getDefaultMiddleware()
  defaultMiddlewares.concat(routerMiddleware(history))

  if (process.env.NODE_ENV !== "production") {
    const logger = createLogger({ collapsed: true });
    defaultMiddlewares.concat(logger);
  }

  return defaultMiddlewares
}

const store = configureStore({
  reducer: reducers,
  middleware: middlewares
})

export default store;
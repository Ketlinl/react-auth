import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";
import { routerMiddleware } from "connected-react-router";
import { configureStore } from "@reduxjs/toolkit"
import createRootReducer from "../reducers";

export const history = createBrowserHistory();
const reducers = createRootReducer(history);

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware().concat(routerMiddleware(history))

    if (process.env.NODE_ENV !== "production") {
      const logger = createLogger({ collapsed: true });
      defaultMiddleware.push(logger);
    }

    return defaultMiddleware
  }
})

export default store;
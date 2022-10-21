import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./config/store";
import reportWebVitals from "./config/reportWebVitals";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// Se você deseja começar a medir o desempenho em seu aplicativo, passe uma função para
// registrar os resultados (por exemplo: reportWebVitals (console.log)) ou envie para um
// endpoint analítico. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();

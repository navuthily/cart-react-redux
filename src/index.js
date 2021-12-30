import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from "redux-persist/lib/integration/react";
import App from './App';
import { store,persistor } from './redux/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<App />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

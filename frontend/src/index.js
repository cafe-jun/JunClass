import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './layouts/App/';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer, { rootSaga } from './modules/index';
import { tempUser, check } from './modules/user';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
function loadUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return;
    console.log('user checking role adding');
    store.dispatch(tempUser(user));
    store.dispatch(check());
  } catch (err) {
    console.log('localStorage is not workgin');
  }
}
sagaMiddleware.run(rootSaga);
loadUser();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

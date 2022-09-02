import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle'
import {Provider} from 'react-redux'
import {createStore,compose,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import membershipFormReducer from './redux-store/Reducers/membershipForm'
import planInfoReducer from './redux-store/Reducers/planInfo'
import authReducer from './redux-store/Reducers/auth'

const rootReducer=combineReducers({
  emailStore:membershipFormReducer,
  planInfo:planInfoReducer,
  auth:authReducer
});

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


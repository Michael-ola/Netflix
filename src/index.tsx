import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './GlobalStyle'
import {Provider} from 'react-redux'
import {createStore,compose,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import membershipFormReducer from './lib/redux-store/Reducers/membershipForm'
import planInfoReducer from './lib/redux-store/Reducers/planInfo'
import authReducer from './lib/redux-store/Reducers/auth'
import {composeWithDevTools} from 'redux-devtools-extension'
//import {setMoviesData} from './services/firebase/setMoviesData'

const rootReducer=combineReducers({
  emailStore:membershipFormReducer,
  planInfo:planInfoReducer,
  auth:authReducer
});

//setMoviesData();

const composeEnhancers=composeWithDevTools || compose;
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


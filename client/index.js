/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './rootReducer';
import setAuthorizaitonToken from './utils/setAuthorizationToken'
import jwt from 'jsonwebtoken';
import {setCurrentUser} from './actions/authActions'

import routes from './routes';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )

);
if(localStorage.jwtToken){
	setAuthorizaitonToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
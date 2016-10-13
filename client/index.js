/**
 * Created by meng on 2016/9/29.
 */
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
/*import rootReducer from './rootReducer'*/

import routes from './routes';

const store = createStore(
  (state = {}) => state,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )

);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app'));
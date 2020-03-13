import React from 'react';
import ReactDOM from 'react-dom';

import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'

import routes from './routes'
import {BrowserRouter as Router} from 'react-router-dom'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes}>
            {routes}
        </Router>
    </Provider>
, document.getElementById('root'));

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import history from '../history/history'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'

// const sagaMiddleware = createSagaMiddleware()

const middlewares = [routerMiddleware(history)]

const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, enhancer)

// sagaMiddleware.run(rootSaga)

export default store

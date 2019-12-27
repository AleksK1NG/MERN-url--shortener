import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import history from '../history/history'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './rootEpic'

import { persistStore } from 'redux-persist'

// import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
// import rootSaga from './rootSaga'

// const sagaMiddleware = createSagaMiddleware()
const epicMiddleware = createEpicMiddleware()

const middlewares = [routerMiddleware(history), epicMiddleware]

const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, enhancer)

// sagaMiddleware.run(rootSaga)
epicMiddleware.run(rootEpic)

export const persistor = persistStore(store)

export default { store, persistor }

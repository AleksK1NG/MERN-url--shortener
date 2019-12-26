import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { authReducer } from './modules/authModule/authReducer'

import history from '../history/history'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  auth: authReducer,
  router: connectRouter(history),
})

export default persistReducer(persistConfig, rootReducer)

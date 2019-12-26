import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from '../history/history'

const rootReducer = combineReducers({
  router: connectRouter(history),
})

// export type AppState = ReturnType<typeof rootReducer>

// The top-level state object
// export interface AppState {
//   shop: ShopState
//   auth: AuthState
//   UI: UIState
//   cart: CartState
//   directory: DirectoryState
// }

export default rootReducer
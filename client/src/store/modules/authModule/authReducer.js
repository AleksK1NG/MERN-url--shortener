import { produce } from 'immer'
import { authTypes } from './authTypes'

const initialState = {
  user: null,
  isLoading: true,
  error: null,
  isAuthenticated: false,
  name: 'Alex',
}

export const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action

    switch (type) {
      case authTypes.REGISTER_USER_REQUEST:
        draft.isLoading = true
        return

      case authTypes.REGISTER_USER_SUCCESS:
        draft.user = payload.userData
        draft.isLoading = false
        draft.error = null
        draft.isAuthenticated = true
        return

      case authTypes.REGISTER_USER_ERROR:
        draft.user = null
        draft.isLoading = false
        draft.error = payload.error
        draft.isAuthenticated = false
        return

      default:
        return state
    }
  })

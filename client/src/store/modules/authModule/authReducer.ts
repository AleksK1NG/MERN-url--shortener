import { produce } from 'immer'
import { Reducer } from 'redux'
import { IUser } from '../../../inerfaces/appInterfaces'
import { AuthTypes } from './authTypes'
import { Action } from 'redux'
import { AuthAction } from './authActions'

export interface IAuthState {
  user: IUser | null
  isLoading: boolean
  error: any
  isAuthenticated: boolean
}

const initialState: IAuthState = {
  user: null,
  isLoading: true,
  error: null,
  isAuthenticated: false,
}

interface IAction extends Action {
  payload?: any
}

export const authReducer: Reducer<IAuthState, any> = (state = initialState, action: AuthAction): IAuthState =>
  produce(state, (draft: IAuthState) => {
    const { type, payload } = action

    switch (type) {
      case AuthTypes.REGISTER_USER_REQUEST:
        draft.isLoading = true
        return

      case AuthTypes.REGISTER_USER_SUCCESS:
        draft.user = payload.userData
        draft.isAuthenticated = true
        draft.error = null
        draft.isLoading = false
        return

      default:
        return state
    }
  })

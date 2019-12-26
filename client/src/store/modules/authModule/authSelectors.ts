import { createSelector } from 'reselect'
import { IAuthState } from './authReducer'
import { AppState } from '../../rootReducer'

// Selectors

export const authStateSelector = (state: AppState) => state.auth

export const userSelector = createSelector(authStateSelector, (state: IAuthState) => state.user)

export const userNameSelector = createSelector(authStateSelector, (state) => state.name)

import { createSelector } from 'reselect'

// Selectors

export const authStateSelector = (state) => state.auth

export const nameSelector = createSelector(authStateSelector, (state) => state.name)
export const userSelector = createSelector(authStateSelector, (state) => (state.user ? state.user : null))
export const isAuthenticatedSelector = createSelector(authStateSelector, (state) => state.isAuthenticated)
export const isAuthLoadingSelector = createSelector(authStateSelector, (state) => state.isLoading)

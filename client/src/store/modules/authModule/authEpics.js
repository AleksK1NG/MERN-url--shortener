import { authTypes } from './authTypes'
import { ofType } from 'redux-observable'
import { map, switchMap, tap, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { loginUserError, loginUserSuccess, registerUserError, registerUserSuccess, loadUserSuccess, loadUserError } from './authActions'
import { of } from 'rxjs'
import { getTokenFromLocalStorage } from '../../../utils/getTokenFromLocalStorage'
import { toast } from 'react-toastify'
import { rejectErrorMessage } from '../../../utils/rejectErrorMessage'

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getTokenFromLocalStorage('mern-dev')}`,
}

const registerUserEpic = (action$, state) => {
  return action$.pipe(
    ofType(authTypes.REGISTER_USER_REQUEST),
    switchMap((action) => {
      return ajax.post('http://localhost:5000/api/v1/auth/register', action.payload.registerData, { 'Content-Type': 'application/json' }).pipe(
        tap((data) => console.log(data)),
        map(({ response, request }) => {
          toast.success('You are registered ! =D')
          return registerUserSuccess(response)
        }),
        catchError((err) => {
          toast.error(rejectErrorMessage(err))
          return of(registerUserError(rejectErrorMessage(err)))
        }),
      )
    }),
  )
}

const loginUserEpic = (action$, state) => {
  return action$.pipe(
    ofType(authTypes.LOGIN_USER_REQUEST),
    switchMap((action) => {
      return ajax.post(`http://localhost:5000/api/v1/auth/login`, action.payload.loginData, { 'Content-Type': 'application/json' }).pipe(
        tap((data) => console.log(data)),
        map(({ response }) => {
          if (response.token) {
            localStorage.setItem('mern-dev', response.token)
          }
          toast.success('You are successfully logged in ! =D')
          return loginUserSuccess(response.data)
        }),
        catchError((err) => {
          toast.error(rejectErrorMessage(err))
          return of(loginUserError(rejectErrorMessage(err)))
        }),
      )
    }),
  )
}

export const loadUserEpic = (action$, state) => {
  return action$.pipe(
    ofType(authTypes.LOAD_USER_REQUEST),
    switchMap(({ payload, type }) => {
      return ajax.getJSON(`http://localhost:5000/api/v1/auth/me`, headers).pipe(
        tap((data) => console.log(data)),
        map((data) => {
          return loadUserSuccess(data)
        }),
        catchError((err) => of(loadUserError(rejectErrorMessage(err)))),
      )
    }),
  )
}

export default [registerUserEpic, loginUserEpic, loadUserEpic]

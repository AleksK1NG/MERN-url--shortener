import { authTypes } from './authTypes'
import { ofType } from 'redux-observable'
import { mergeMap, map, switchMap, tap, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { loginUserError, loginUserSuccess, registerUserError, registerUserSuccess } from './authActions'
import { from, of } from 'rxjs'

const TEST_URL = 'https://jsonplaceholder.typicode.com/users/'

const jsonFetchEpic = (action$, state) => {
  return action$.pipe(
    ofType(authTypes.REGISTER_USER_REQUEST),
    mergeMap((action) => {
      debugger
      return ajax.getJSON(`${TEST_URL}/${action.payload.userData}`).pipe(
        tap((data) => console.log(data)),
        map((response) => {
          return registerUserSuccess(response)
        }),
        catchError((err) => of(registerUserError(err))),
      )
    }),
  )
}

const registerUserEpic = (action$, state) => {
  return action$.pipe(
    ofType(authTypes.REGISTER_USER_REQUEST),
    switchMap((action) => {
      return ajax.post('http://localhost:5000/api/v1/auth/register', action.payload.registerData, { 'Content-Type': 'application/json' }).pipe(
        tap((data) => console.log(data)),
        map(({ response, request }) => {
          console.log(response)
          debugger
          return registerUserSuccess(response)
        }),
        catchError((err) => of(registerUserError(err))),
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
          return loginUserSuccess(response.data)
        }),
        catchError((err) => of(loginUserError(err))),
      )
    }),
  )
}


export default [registerUserEpic, loginUserEpic]

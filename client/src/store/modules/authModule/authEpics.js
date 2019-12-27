import { authTypes } from './authTypes'
import { ofType } from 'redux-observable'
import { mergeMap, map, switchMap, tap, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { registerUserError, registerUserSuccess } from './authActions'
import { of } from 'rxjs'

const TEST_URL = 'https://jsonplaceholder.typicode.com/users/1'

const jsonFetchEpic = (action$, state) => {
  return action$.pipe(
    ofType(authTypes.REGISTER_USER_REQUEST),
    mergeMap((action) =>
      ajax.getJSON(TEST_URL).pipe(
        tap((data) => console.log(data)),
        map((response) => {
          return registerUserSuccess(response)
        }),
        catchError((err) => of(registerUserError(err))),
      ),
    ),
  )
}

export default [jsonFetchEpic]

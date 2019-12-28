import { ofType } from 'redux-observable'
import { map, switchMap, tap, catchError, filter } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs'
import { getTokenFromLocalStorage } from '../../../utils/getTokenFromLocalStorage'
import { toast } from 'react-toastify'
import { rejectErrorMessage } from '../../../utils/rejectErrorMessage'
import { linksTypes } from './linksTypes'
import { createLinkError, createLinkSuccess, getAllLinksError, getAllLinksSuccess } from './linksActions'

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getTokenFromLocalStorage('mern-dev')}`,
}

export const createLinkEpic = (action$, state) => {
  return action$.pipe(
    ofType(linksTypes.CREATE_LINK_REQUEST),
    switchMap((action) => {
      return ajax.post('http://localhost:5000/api/v1/links/generate', action.payload.linkInput, headers).pipe(
        tap((data) => console.log(data)),
        map(({ response, request }) => {
          toast.success('Link successfully created ! =D')
          return createLinkSuccess(response.data)
        }),
        catchError((err) => {
          toast.error(rejectErrorMessage(err))
          return of(createLinkError(rejectErrorMessage(err)))
        }),
      )
    }),
  )
}

export const getAllLinksEpic = (action$, state) => {
  return action$.pipe(
    ofType(linksTypes.GET_ALL_LINKS_REQUEST),
    switchMap((action) => {
      return ajax.getJSON('http://localhost:5000/api/v1/links', headers).pipe(
        tap((logData) => console.log(logData.data)),
        map(({ data }) => {
          return getAllLinksSuccess(data)
        }),
        catchError((err) => {
          debugger
          return of(getAllLinksError(rejectErrorMessage(err)))
        }),
      )
    }),
  )
}

export default [createLinkEpic, getAllLinksEpic]

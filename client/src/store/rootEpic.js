import { combineEpics } from 'redux-observable'
import authEpics from './modules/authModule/authEpics'

export default combineEpics(...authEpics)

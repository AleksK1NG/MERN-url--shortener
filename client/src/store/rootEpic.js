import { combineEpics } from 'redux-observable'
import authEpics from './modules/authModule/authEpics'
import linksEpics from './modules/linksModule/linksEpics'

export default combineEpics(...authEpics, ...linksEpics)

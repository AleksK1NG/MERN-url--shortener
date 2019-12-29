import { produce } from 'immer'
import { linksTypes } from './linksTypes'

const initialState = {
  links: [],
  link: null,
  isLoading: false,
  error: null,
}

export const linksReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action

    switch (type) {
      case linksTypes.GET_LINK_BY_ID_REQUEST:
      case linksTypes.CREATE_LINK_REQUEST:
      case linksTypes.GET_ALL_LINKS_REQUEST:
        draft.isLoading = true
        return

      case linksTypes.CREATE_LINK_SUCCESS:
        draft.link = payload.linkData
        draft.isLoading = false
        draft.error = null
        return

      case linksTypes.CREATE_LINK_ERROR:
      case linksTypes.GET_ALL_LINKS_ERROR:
      case linksTypes.GET_LINK_BY_ID_ERROR:
        draft.link = null
        draft.isLoading = false
        draft.error = payload.error
        return

      case linksTypes.GET_ALL_LINKS_SUCCESS:
        draft.links = payload.data
        draft.isLoading = false
        draft.error = null
        return

      case linksTypes.GET_LINK_BY_ID_SUCCESS:
        draft.link = payload.linkData
        draft.isLoading = false
        draft.error = null
        return

      default:
        return state
    }
  })

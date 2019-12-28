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
      case linksTypes.CREATE_LINK_REQUEST:
        draft.isLoading = true
        return
      case linksTypes.CREATE_LINK_SUCCESS:
        draft.link = payload.linkData
        draft.isLoading = false
        draft.error = null
        return

      case linksTypes.CREATE_LINK_ERROR:
        draft.link = null
        draft.isLoading = false
        draft.error = payload.error
        return

      default:
        return state
    }
  })

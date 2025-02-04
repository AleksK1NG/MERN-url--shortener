import { linksTypes } from './linksTypes'

export const createLinkRequest = (linkInput) => ({
  type: linksTypes.CREATE_LINK_REQUEST,
  payload: { linkInput },
})

export const createLinkSuccess = (linkData) => ({
  type: linksTypes.CREATE_LINK_SUCCESS,
  payload: { linkData },
})

export const createLinkError = (error) => ({
  type: linksTypes.CREATE_LINK_SUCCESS,
  payload: { error },
})

export const getAllLinksRequest = () => ({
  type: linksTypes.GET_ALL_LINKS_REQUEST,
})

export const getAllLinksSuccess = (data) => ({
  type: linksTypes.GET_ALL_LINKS_SUCCESS,
  payload: { data },
})

export const getAllLinksError = (error) => ({
  type: linksTypes.GET_ALL_LINKS_ERROR,
  payload: { error },
})

export const getLinkByIdRequest = (linkId) => {
  return {
    type: linksTypes.GET_LINK_BY_ID_REQUEST,
    payload: { linkId },
  }
}

export const getLinkByIdSuccess = (linkData) => ({
  type: linksTypes.GET_LINK_BY_ID_SUCCESS,
  payload: { linkData },
})

export const getLinkByIdError = (error) => ({
  type: linksTypes.GET_LINK_BY_ID_ERROR,
  payload: { error },
})

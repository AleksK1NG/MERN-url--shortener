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

export const getAllLinksRequest = (linkInput) => ({
  type: linksTypes.GET_ALL_LINKS_REQUEST,
  payload: { linkInput },
})

export const getAllLinksSuccess = (linkData) => ({
  type: linksTypes.GET_ALL_LINKS_SUCCESS,
  payload: { linkData },
})

export const getAllLinksError = (error) => ({
  type: linksTypes.GET_ALL_LINKS_ERROR,
  payload: { error },
})

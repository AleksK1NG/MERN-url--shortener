import { createSelector } from 'reselect'

// Selectors

export const linksStateSelector = (state) => state.links

export const allLinksSelector = createSelector(linksStateSelector, (state) => state.links)

export const linksIsLoadingSelector = createSelector(linksStateSelector, (state) => state.isLoading)

export const getLinkByIdSelector = (state, linkID) => {
  const result = state.links.links.find((link) => link._id === linkID)
  debugger
  return result ? result : null
}

export const linkSelector = createSelector([getLinkByIdSelector], (link) => (link ? link : null))

export const singleLinkSelector = createSelector(linksStateSelector, (state) => (state.link ? state.link : null))

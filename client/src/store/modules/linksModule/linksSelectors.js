import { createSelector } from 'reselect'

// Selectors

export const linksStateSelector = (state) => state.links

export const allLinksSelector = createSelector(linksStateSelector, (state) => state.links)

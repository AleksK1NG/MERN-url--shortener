import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllLinksRequest } from '../../store/modules/linksModule/linksActions'
import { allLinksSelector, linksIsLoadingSelector } from '../../store/modules/linksModule/linksSelectors'
import Loader from '../../components/Loader/Loader'
import LinksList from '../../components/LinksList/LinksList'

const LinksPage = ({ allLinks, linksIsLoading, getAllLinksRequest }) => {
  useEffect(() => {
    getAllLinksRequest()
  }, [getAllLinksRequest])

  if (linksIsLoading || !allLinks) return <Loader />
  return <>{allLinks && <LinksList links={allLinks} />}</>
}

export default connect(
  (state) => ({
    allLinks: allLinksSelector(state),
    linksIsLoading: linksIsLoadingSelector(state),
  }),
  { getAllLinksRequest },
)(LinksPage)

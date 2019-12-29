import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { allLinksSelector, linksIsLoadingSelector } from '../../store/modules/linksModule/linksSelectors'
import { getAllLinksRequest } from '../../store/modules/linksModule/linksActions'
import Loader from '../../components/Loader/Loader'

const DetailPage = ({ linksIsLoading, getAllLinksRequest, links }) => {
  useEffect(() => {
    getAllLinksRequest()
  }, [getAllLinksRequest])

  if (links.length === 0 || linksIsLoading) return <Loader />

  return <div>DetailPage</div>
}

export default connect(
  (state) => ({
    linksIsLoading: linksIsLoadingSelector(state),
    links: allLinksSelector(state),
  }),
  { getAllLinksRequest },
)(DetailPage)

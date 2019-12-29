import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { allLinksSelector, linksIsLoadingSelector, singleLinkSelector } from '../../store/modules/linksModule/linksSelectors'
import { getLinkByIdRequest } from '../../store/modules/linksModule/linksActions'
import Loader from '../../components/Loader/Loader'
import LinkCard from '../../components/LinkCard/LinkCard'
import { useParams } from 'react-router-dom'

const DetailPage = ({ linksIsLoading, link }) => {
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      getLinkByIdRequest()
    }
  }, [getLinkByIdRequest])

  if (linksIsLoading || !link) return <Loader />

  return <>{!linksIsLoading && link && <LinkCard link={link} />}</>
}

export default connect(
  (state, props) => ({
    linksIsLoading: linksIsLoadingSelector(state),
    // links: allLinksSelector(state),
    link: singleLinkSelector(state),
  }),
  { getLinkByIdRequest },
)(DetailPage)

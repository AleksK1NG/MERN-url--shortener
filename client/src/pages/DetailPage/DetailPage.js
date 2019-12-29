import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { linksIsLoadingSelector, singleLinkSelector } from '../../store/modules/linksModule/linksSelectors'
import { getLinkByIdRequest } from '../../store/modules/linksModule/linksActions'
import Loader from '../../components/Loader/Loader'
import LinkCard from '../../components/LinkCard/LinkCard'
import { useParams } from 'react-router-dom'

const DetailPage = ({ linksIsLoading, link, getLinkByIdRequest }) => {
  const params = useParams()

  useEffect(() => {
    getLinkByIdRequest(params.id)
  }, [getLinkByIdRequest, params.id])

  if (!link) return <Loader />

  return <>{!linksIsLoading && link && <LinkCard link={link} />}</>
}

export default connect(
  (state) => ({
    linksIsLoading: linksIsLoadingSelector(state),
    link: singleLinkSelector(state),
  }),
  { getLinkByIdRequest },
)(DetailPage)

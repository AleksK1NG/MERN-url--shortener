import React from 'react'
import { connect } from 'react-redux'
import { nameSelector } from '../../store/modules/authModule/authSelectors'

const HomePage = ({ name }) => {
  console.log(name)
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  )
}

export default connect(
  (state, props) => ({
    name: nameSelector(state),
  }),
  null,
)(HomePage)

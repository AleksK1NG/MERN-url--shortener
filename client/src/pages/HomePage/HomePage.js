import React from 'react'
import { connect } from 'react-redux'
import { nameSelector } from '../../store/modules/authModule/authSelectors'
import { registerUserRequest } from '../../store/modules/authModule/authActions'

const HomePage = ({ name, registerUserRequest }) => {
  console.log(name)

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => registerUserRequest(1)}>Ok</button>
      <a href="#" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
    </div>
  )
}

export default connect(
  (state, props) => ({
    name: nameSelector(state),
  }),
  { registerUserRequest },
)(HomePage)

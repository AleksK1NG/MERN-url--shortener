import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../store/rootReducer'
import { userNameSelector } from '../../store/modules/authModule/authSelectors'

interface IProps {
  name?: string
}

const Homepage: React.FC<IProps> = ({ name }) => {
  console.log(name)
  debugger
  return (
    <div>
      <h1>Home page =D</h1>
      <button onClick={() => console.log('TS =D')}>Ok</button>
    </div>
  )
}

export default connect(
  (state: AppState, props: IProps) => ({
    name: userNameSelector(state),
  }),
  {},
)(Homepage)

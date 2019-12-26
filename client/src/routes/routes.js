import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { userSelector } from '../store/modules/authModule/authSelectors'

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  )
}

export default connect(
  (state, props) => ({
    user: userSelector(state),
  }),
  null,
)(Routes)

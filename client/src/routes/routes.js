import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { userSelector } from '../store/modules/authModule/authSelectors'

const DetailPage = React.lazy(() => import('../pages/DetailPage/DetailPage'))
const LinksPage = React.lazy(() => import('../pages/LinksPage/LinksPage'))
const CreatePage = React.lazy(() => import('../pages/CreatePage/CreatePage'))
const AuthPage = React.lazy(() => import('../pages/AuthPage/AuthPage'))

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={AuthPage} />
      <Route exact path="/links" component={LinksPage} />
      <Route exact path="/create" component={CreatePage} />
      <Route exact path="/detail/:id" component={DetailPage} />
      <Redirect to="/" />
    </Switch>
  )
}

export default connect(
  (state, props) => ({
    user: userSelector(state),
  }),
  null,
)(Routes)

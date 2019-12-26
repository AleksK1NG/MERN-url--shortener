import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'))

interface IProps {}

const Routes: React.FC<IProps> = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  )
}

export default Routes
import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Route, Switch } from 'react-router-dom'

const Routes = React.lazy(() => import('./routes/routes'))

const App = () => {
  return (
    <>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<p>Loading ...</p>}>
            <Route component={Routes} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  )
}

export default connect((state) => ({}), null)(App)

import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Route, Switch } from 'react-router-dom'
import 'materialize-css'

const Routes = React.lazy(() => import('./routes/routes'))

const App = () => {
  return (
    <>
      <div className="container">
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<p>Loading ...</p>}>
              <Route component={Routes} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    </>
  )
}

export default connect((state) => ({}), null)(App)

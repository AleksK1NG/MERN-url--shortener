import React, { Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Route, Switch } from 'react-router-dom'
import 'materialize-css'
import { loadUserRequest } from './store/modules/authModule/authActions'
import { ToastContainer, toast } from 'react-toastify'

const Routes = React.lazy(() => import('./routes/routes'))

const App = ({ loadUserRequest }) => {
  useEffect(() => {
    loadUserRequest()
  }, [loadUserRequest])
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
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </>
  )
}

export default connect((state) => ({}), { loadUserRequest })(App)

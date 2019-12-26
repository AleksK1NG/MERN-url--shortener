import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const Routes = React.lazy(() => import('./routes/routes'))

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<p>Loading...</p>}>
            <Route component={Routes} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </>
  )
}

export default App

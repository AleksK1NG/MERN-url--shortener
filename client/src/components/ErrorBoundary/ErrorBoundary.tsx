import * as React from 'react'

class ErrorBoundary extends React.Component<{}, {}> {
  state = {
    hasErrored: false,
  }

  static getDerivedStateFromError(error: any) {
    // process the error
    return { hasErrored: true }
  }

  componentDidCatch(error: any, info: any) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div>
          <h2>Error page</h2>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
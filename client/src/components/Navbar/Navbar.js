import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { isAuthenticatedSelector } from '../../store/modules/authModule/authSelectors'
import { logoutUser } from '../../store/modules/authModule/authActions'
import { NavLink, useHistory } from 'react-router-dom'

const Navbar = ({ isAuthenticated, logoutUser }) => {
  const history = useHistory()

  const logoutHandler = useCallback(() => {
    logoutUser()
    localStorage.removeItem('mern-dev')
    history.push('/')
  }, [logoutUser])

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <NavLink to="/" className="brand-logo">
          Url link shortcutter
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {isAuthenticated && (
            <li>
              <NavLink to="/create">Create</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          {isAuthenticated ? (
            <li>
              <a href="/" onClick={logoutHandler}>
                Logout
              </a>
            </li>
          ) : (
            <li>
              <a href="/detail/123" onClick={logoutHandler}>
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default connect(
  (state) => ({
    isAuthenticated: isAuthenticatedSelector(state),
  }),
  { logoutUser },
)(Navbar)

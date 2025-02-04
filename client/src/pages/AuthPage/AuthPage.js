import React, { useCallback, useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { loginUserRequest, registerUserRequest } from '../../store/modules/authModule/authActions'
import { connect } from 'react-redux'
import { isAuthLoadingSelector } from '../../store/modules/authModule/authSelectors'

const initialState = { email: '', password: '' }

const AuthPage = ({ registerUserRequest, loginUserRequest, isAuthLoading }) => {
  const [values, handleChange, setValues] = useForm(initialState)

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const handleRegister = useCallback(() => {
    registerUserRequest(values)
    setValues(initialState)
  }, [values, registerUserRequest, setValues])

  const handleLogin = useCallback(() => {
    console.log(' values', values)
    loginUserRequest(values)
    setValues(initialState)
  }, [values, loginUserRequest, setValues])

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>Links Shortener</h2>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input id="email" type="email" className="validate" name="email" value={values.email} onChange={handleChange} />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input id="password" type="password" className="validate" name="password" value={values.password} onChange={handleChange} />
                <label htmlFor="password">Password</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="waves-effect waves-light btn m-right" onClick={handleLogin} disabled={isAuthLoading}>
              <i className="material-icons right">account_box</i>Login
            </button>
            <button className="waves-effect waves-light btn" onClick={handleRegister} disabled={isAuthLoading}>
              <i className="material-icons right">person</i>Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    isAuthLoading: isAuthLoadingSelector(state),
  }),
  { registerUserRequest, loginUserRequest },
)(AuthPage)

import { authTypes } from './authTypes'

export const registerUserRequest = (registerData) => ({
  type: authTypes.REGISTER_USER_REQUEST,
  payload: { registerData },
})

export const registerUserSuccess = (userData) => ({
  type: authTypes.REGISTER_USER_SUCCESS,
  payload: { userData },
})

export const registerUserError = (error) => ({
  type: authTypes.REGISTER_USER_ERROR,
  payload: { error },
})

export const loginUserRequest = (loginData) => ({
  type: authTypes.LOGIN_USER_REQUEST,
  payload: { loginData },
})

export const loginUserSuccess = (userData) => ({
  type: authTypes.LOGIN_USER_SUCCESS,
  payload: { userData },
})

export const loginUserError = (error) => ({
  type: authTypes.LOGIN_USER_ERROR,
  payload: { error },
})

// export const authActions = { registerUserError, registerUserRequest, registerUserSuccess }

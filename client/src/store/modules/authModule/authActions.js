import { authTypes } from './authTypes'

const registerUserRequest = () => ({
  type: authTypes.REGISTER_USER_REQUEST,
})

const registerUserSuccess = (userData) => ({
  type: authTypes.REGISTER_USER_REQUEST,
  payload: { userData },
})

const registerUserError = (error) => ({
  type: authTypes.REGISTER_USER_REQUEST,
  payload: { error },
})

export default { registerUserError, registerUserRequest, registerUserSuccess }

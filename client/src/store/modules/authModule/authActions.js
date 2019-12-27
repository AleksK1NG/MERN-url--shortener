import { authTypes} from './authTypes'

export const registerUserRequest = () => ({
  type: authTypes.REGISTER_USER_REQUEST,
})

export const registerUserSuccess = (userData) => ({
  type: authTypes.REGISTER_USER_SUCCESS,
  payload: { userData },
})

export const registerUserError = (error) => ({
  type: authTypes.REGISTER_USER_ERROR,
  payload: { error },
})

// export default { registerUserError, registerUserRequest, registerUserSuccess }

import { authTypes} from './authTypes'

export const registerUserRequest = (userData) => ({
  type: authTypes.REGISTER_USER_REQUEST,
  payload: { userData },
})

export const registerUserSuccess = (userData) => ({
  type: authTypes.REGISTER_USER_SUCCESS,
  payload: { userData },
})

export const registerUserError = (error) => ({
  type: authTypes.REGISTER_USER_ERROR,
  payload: { error },
})


// export const authActions = { registerUserError, registerUserRequest, registerUserSuccess }

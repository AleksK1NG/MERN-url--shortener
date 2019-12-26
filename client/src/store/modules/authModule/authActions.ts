// import { Action } from 'redux'
import { AuthTypes, RegisterUserSuccess } from './authTypes'
import { IUser } from '../../../inerfaces/appInterfaces'

// interface IAuthAction extends Action {
//   payload?: any
// }

export const registerUserSuccess = (userData: IUser): RegisterUserSuccess => ({
  type: AuthTypes.REGISTER_USER_SUCCESS,
  payload: { userData },
})

export type AuthAction = RegisterUserSuccess

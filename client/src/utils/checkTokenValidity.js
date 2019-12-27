import jwt from 'jsonwebtoken'

export const checkTokenValidity = (token) => {
  if (token) {
    const decodedToken = jwt.decode(token)

    return decodedToken && decodedToken.exp * 1000 > new Date().getTime()
  }

  return false
}

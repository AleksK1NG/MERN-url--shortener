export const getTokenFromLocalStorage = (tokenName) => {
  const token = localStorage.getItem(tokenName)
  return token ? token : ''
}

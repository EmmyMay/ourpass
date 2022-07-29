import api from './api'

export const getAccount = () => {
  return api.get('/accounts')
}

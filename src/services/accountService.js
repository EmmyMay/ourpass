import api from './api'

export const getAccount = () => {
  api.get('/accounts')
}

import api from './api'

export const getInvoice = () => {
  return api.get('/invoices')
}

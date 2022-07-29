import api from './api'

export const getInvoice = () => {
  api.get('/invoices')
}

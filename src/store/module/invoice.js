import { getInvoice } from 'src/services/invoiceService'
const state = {
  invoices: [],
}

const getters = {
  getInvoice: state => state.invoices,
}

const actions = {
  async getInvoice({ commit, dispatch }) {
    try {
      const res = await getInvoice()
      commit('SET_INVOICES', res.data)
    } catch (error) {
      alert(error)
    }
  },
}

const mutations = {
  SET_INVOICES(state, invoice) {
    state.invoices = invoice.invoices
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

import { getAccount } from 'src/services/accountService'
const state = {
  account: [],
}

const getters = {
  getAccount: state => state.account,
}

const actions = {
  async getAccount({ commit, dispatch }) {
    try {
      const res = await getAccount()
      commit('SET_ACCOUNTS', res.data)
    } catch (error) {
      alert(error)
    }
  },
}

const mutations = {
  SET_ACCOUNTS(state, account) {
    state.account = Object.assign(...account.accounts)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

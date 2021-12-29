export default {
  namespaced: true,

  state: {
    zombieCount: 0,
  },

  mutations: {
    setZombieCount(state, payload) {
      state.zombieCount = payload
    }
  },

  actions: {
    async fetchZombie({ rootState }, payload) {
      const contract = rootState.drizzle.drizzleInstance.contracts['ZombieFactories'];

      try {
        return await contract.methods.zombies(payload).call()
      } catch (error) {
        console.log(error)
      }
    },
    async fetchZombieCount({ commit, rootState }) {
      const contract = rootState.drizzle.drizzleInstance.contracts['ZombieFactories'];
      const activeAccount = rootState.accounts.activeAccount;

      try {
        const zombieCount = await contract.methods['ownerZombieCount'](activeAccount).call()
        commit('setZombieCount', zombieCount);
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {}
}

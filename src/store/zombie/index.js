export default {
  namespaced: true,

  state: {
    zombieCount: 0,
    zombies: [],
    currentZombie: null
  },

  mutations: {
    setZombieCount(state, payload) {
      state.zombieCount = payload
    },
    addZombie(state, payload) {
      const index = state.zombies.indexOf(payload);
      if (index === -1) {
        state.zombies.push(payload)
      }
    },
    removeZombie(state, payload) {
      const index = state.zombies.indexOf(payload);
      if (index !== -1) {
        state.zombies.splice(index, 1);
      }
    }
  },

  actions: {
    async fetchZombie({ commit, dispatch, rootState }, payload) {
      const contract = rootState.drizzle.drizzleInstance.contracts['ZombieFactories'];

      try {
        const zombie = await contract.methods.zombies(payload.zombieId).call()

        if (payload.isAttackCard) {
          zombie.owner = await dispatch('ownerByZombieId', payload.zombieId)
        }

        commit('addZombie', zombie)
        return zombie
      } catch (error) {
        console.log(error)
      }
    },
    async fetchZombieCount({ commit, rootState }) {
      const contract = rootState.drizzle.drizzleInstance.contracts['ZombieFactories'];
      const activeAccount = rootState.accounts.activeAccount;

      try {
        const zombieCount = await contract.methods['ownerZombieCount'](activeAccount).call()
        commit('setZombieCount', Number(zombieCount));
      } catch (error) {
        console.log(error)
      }
    },
    async ownerByZombieId({ rootState }, zombieId) {
      const contract = rootState.drizzle.drizzleInstance.contracts['ZombieFactories'];

      try {
        return await contract.methods['zombieToOwner'](zombieId).call()
      } catch (error) {
        console.log(error)
      }
    },
    createZombie({ rootState }, name) {
      const contract = rootState.drizzle.drizzleInstance.contracts['ZombieFactories'];

      try {
        contract.methods.createRandomZombie(name).send()
      } catch (error) {
        console.log(error)
      }
    },
  },

  getters: {
    getCurrentZombie: (state) => (state.currentZombie ? state.currentZombie : state.zombies[0])
  }
}

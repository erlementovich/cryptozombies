<template>
  <div>
    <strong>Zombies: </strong>
    <ul v-if="contractData.length">
      <li v-for="zombie in contractData" :key="zombie.id">
        {{ zombie }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const args = {
  contractName: 'ZombieFactories',
  method: 'getZombiesByOwner',
  methodArgs: [],
};

export default {
  name: "ZombieStorage",
  computed: {
    ...mapGetters('contracts', ['getContractData']),
    ...mapGetters('accounts', ['activeAccount']),
    contractData() {
      return this.getContractData({
        contract: args.contractName,
        method: args.method,
      })
    }
  },
  async created() {
    args.methodArgs = [this.activeAccount];
    await this.$store.dispatch('drizzle/REGISTER_CONTRACT', args)
  }
}
</script>

<style scoped>

</style>

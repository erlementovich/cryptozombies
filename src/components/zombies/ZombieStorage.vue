<template>
  <p>
    <strong>Zombies: </strong>{{ contractData }}
  </p>
</template>

<script>
import { mapGetters } from 'vuex';

const args = {
  contractName: 'ZombieFactories',
  method: 'getOwnerZombieIds',
  methodArgs: '',
};

export default {
  name: "ZombieStorage",
  computed: {
    ...mapGetters('contracts', ['getContractData']),
    contractData() {
      return this.getContractData({
        contract: args.contractName,
        method: args.method
      })
    }
  },
  created() {
    this.$store.dispatch('drizzle/REGISTER_CONTRACT', args)
  }
}
</script>

<style scoped>

</style>

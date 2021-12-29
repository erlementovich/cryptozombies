<template>
  <div>
    <b-alert show>Default Alert</b-alert>
    <h2>Zombies: </h2>
    <template v-if="contractData.length">
      <b-card-group deck>
        <ZombieCard v-for="zombie in contractData" :key="zombie.id" :zombie="zombie" />
      </b-card-group>
    </template>
    <b-card v-else
            bg-variant="light"
            text-variant="black"
            title="Зомби не найдено">
      <b-card-text>
        Аккаунт <strong>{{ activeAccount }}</strong> еще не создал ни одного зомби
      </b-card-text>
      <b-button href="#" variant="dark">Создать зомби</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ZombieCard from './ZombieCard';

const args = {
  contractName: 'ZombieFactories',
  method: 'getZombiesByOwner',
  methodArgs: [],
};

export default {
  name: "ZombieStorage",
  components: { ZombieCard },
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

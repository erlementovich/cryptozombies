<template>
  <div>
    <h2>Коллекция зомби: </h2>
    <template v-if="contractData.length && typeof contractData !== 'string'">
      <div class="zombie-cards">
        <ZombieCard v-for="zombieId in contractData" :key="zombieId" :id="zombieId" />
      </div>
    </template>
    <b-card v-else
            bg-variant="light"
            text-variant="black"
            title="Зомби не найдено">
      <b-card-text>
        Аккаунт <strong>{{ activeAccount }}</strong> еще не создал ни одного зомби
      </b-card-text>
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
.zombie-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2em;
}
</style>

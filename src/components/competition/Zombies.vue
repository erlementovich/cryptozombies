<template>
  <div>
    <h2>Зомби других аккаунтов: </h2>
    <template v-if="zombies && zombies.length && typeof zombies !== 'string'">
      <div class="zombie-cards">
        <ZombieCard
          v-for="zombieId
           in zombies"
          :isAttackCard="true"
          :key="zombieId"
          :id="zombieId" />
      </div>
    </template>
    <b-card
      v-else
      bg-variant="light"
      text-variant="black"
      title="У других аккаунтов зомби не найдено">
      <b-card-text>
        Ни один аккаунт еще не создал зомби для битвы
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import ZombieCard from '../zombies/ZombieCard';
import { mapGetters } from 'vuex';

const args = {
  contractName: 'ZombieFactories',
  method: 'getAnotherZombies',
  methodArgs: '',
};

export default {
  name: "Zombies",
  components: { ZombieCard },
  computed: {
    ...mapGetters('contracts', ['getContractData']),
    zombies() {
      return this.getContractData({
        contract: args.contractName,
        method: args.method,
      })
    }
  },
  async created() {
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

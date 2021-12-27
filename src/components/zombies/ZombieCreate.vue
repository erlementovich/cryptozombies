<template>
  <div>
    <input
      v-model="name"
      type="text">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

// const args = {
//   contractName: 'ZombieFactories',
//   method: 'getZombies',
//   methodArgs: '',
// };

export default {
  name: "ZombieCreate",
  data: () => ({
    name: '',
  }),
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
  },
}
</script>

<style scoped>

</style>

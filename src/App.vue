<template>
  <b-container class="py-3">
    <div v-if="isDrizzleInitialized" id="app">
      <Account class="mb-3" />
      <ZombieStorage class="mb-3" />
      <ZombieCreate v-if="!zombieCount" />
      <hr>
      <Zombies class="mt-5" />
    </div>

    <div v-else>Loading application...</div>
  </b-container>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Account from './components/Account';
import ZombieStorage from './components/zombies/ZombieStorage';
import ZombieCreate from './components/zombies/ZombieCreate';
import Zombies from './components/competition/Zombies';

export default {
  name: 'App',
  computed: {
    ...mapGetters("drizzle", ["isDrizzleInitialized"]),
    ...mapGetters('zombie', ['getCurrentZombie']),
    ...mapState('zombie', ['zombieCount'])
  },
  components: { Zombies, ZombieCreate, ZombieStorage, Account },
};
</script>

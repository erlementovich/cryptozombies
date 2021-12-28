<template>
  <div v-if="isDrizzleInitialized" id="app">

    <div class="section">
      <Account />
    </div>

    <div class="section">
      <h2>Zombie Storage</h2>
      <ZombieStorage />
      <ZombieCreate />
    </div>

  </div>

  <div v-else>Loading application...</div>
</template>

<script>
import { mapGetters } from "vuex";
import Account from './components/Account';
import ZombieStorage from './components/zombies/ZombieStorage';
import ZombieCreate from './components/zombies/ZombieCreate';

export default {
  name: 'App',
  components: { ZombieCreate, ZombieStorage, Account },
  computed: {
    ...mapGetters("drizzle", ["isDrizzleInitialized"]),
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

ul {
  padding: 0px;
}

ul,
li {
  list-style: none;
}

li {
  font-size: 1.5em;
}

h1 {
  font-size: 3em;
}

h2 {
  margin-top: 40px;
  font-size: 2em;
}

input[type="text"] {
  font-size: 1.2em;
  border: none;
  border-bottom: 1px solid #2c3e50;
  padding-left: 7px;
}

#app > form > button {
  font-size: 1.2em;
  color: #2c3e50;
  margin-left: 16px;
  border: none;
}

#app > form > button:hover {
  opacity: .8;
  cursor: pointer;
}
</style>

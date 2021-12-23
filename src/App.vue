<template>
  <div v-if="isDrizzleInitialized" id="app">
    <h1>Sign the Guestbook</h1>
    <!--Component from the Drizzle plugin to allow filling of smart contract fields-->
    <drizzle-contract-form
      :contractName="contractName"
      method="signBook"
      :placeholders="['Name']"
    />
    <h2>Guests:</h2>
    <!--Get list of names and transform bytes into Utf8-->
    <ul v-if="getNames">
      <li v-for="(name, i) in getNames" :key="i">{{ utils.toUtf8(name) }}</li>
    </ul>
  </div>
  <div v-else>
    Loading application...
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  data: () => ({
    contractName: 'ZombieFactories'
  }),
  computed: {
    ...mapGetters("drizzle", ["drizzleInstance", "isDrizzleInitialized"]),
    ...mapGetters("contracts", ["getContractData"]),
    getNames() {
      let data = this.getContractData({
        contract: this.contractName,
        method: "getNames"
      });
      if (data === "loading") return false;
      return data;
    },
    utils() {
      return this.drizzleInstance.web3.utils;
    }
  },
  // Register smart contract before the component mounts to ensure data is available
  created() {
    this.$store.dispatch("drizzle/REGISTER_CONTRACT", {
      contractName: this.contractName,
      method: "getNames",
      methodArgs: []
    });
  }
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

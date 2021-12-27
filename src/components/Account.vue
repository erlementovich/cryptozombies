<template>
  <div>
    <h2>Account</h2>
    <div>{{ activeAccount }}</div>
    <div>Balance: {{ activeBalance }} Wei</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Account",
  computed: {
    ...mapGetters('accounts', ['activeAccount', 'activeBalance'])
  },
}
</script>

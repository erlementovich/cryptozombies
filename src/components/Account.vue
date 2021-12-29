<template>
  <b-card>
    <h2>Аккаунт</h2>
    <div>Адрес: <strong>{{ activeAccount }}</strong></div>
    <div>Баланс: <strong>{{ activeBalance }}</strong> Wei</div>
  </b-card>
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

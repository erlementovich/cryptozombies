<template>
  <div class="form-input">
    <input
      v-model="name"
      placeholder="Введите имя зомби"
      type="text">
    <button class="btn" @click.prevent="onSubmit">Создать зомби</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const args = {
  contractName: 'ZombieFactories',
  method: 'createRandomZombie',
  methodArgs: '',
};

export default {
  name: "ZombieCreate",
  data: () => ({
    name: '',
  }),
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
  },

  methods: {
    onSubmit() {
      if (this.name && this.name !== '')
        this.drizzleInstance
          .contracts[args.contractName]
          .methods[args.method]
          .cacheSend(this.name)
    }
  }
}
</script>

<style scoped>
.form-input input {
  border-bottom: 1px solid #2c3e50;
  box-shadow: unset;
  outline: none;
}

.form-input .btn {
  background-color: #2c3e50;
  color: white;
  border: unset;
  padding: 4px 10px;
  margin-left: 10px;
  cursor: pointer;
}
</style>

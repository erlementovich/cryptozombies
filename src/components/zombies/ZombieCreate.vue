<template>
  <b-card>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset" v-if="show">
      <b-form-group
        class="mb-2"
        id="input-group-1"
        label="Имя зомби:"
        label-for="input-1"
        description="Напишите имя своего будущего зомби"
      >
        <b-form-input
          id="input-1"
          v-model="name"
          type="text"
          placeholder="Введите имя"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Создать</b-button>
      <b-button class="mx-2" type="reset" variant="danger">Очистить</b-button>
    </b-form>
  </b-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

const args = {
  contractName: 'ZombieFactories',
  method: 'createRandomZombie',
  methodArgs: '',
};

export default {
  name: "ZombieCreate",
  data: () => ({
    name: '',
    show: true
  }),
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
  },
  async created() {
    await this.fetchZombieCount();
  },
  methods: {
    ...mapActions('zombie', ['fetchZombieCount']),
    onSubmit() {
      if (this.name && this.name !== '')
        this.drizzleInstance
          .contracts[args.contractName]
          .methods[args.method]
          .cacheSend(this.name)

      this.fetchZombieCount();
    },
    onReset(event) {
      event.preventDefault()

      this.name = '';
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
}
</script>

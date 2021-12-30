<template>
  <b-card
    v-if="zombie"
    img-src="data:image/jpeg;base64,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"
    img-top
    class="mb-2"
  >
    <template #header>
      <h4>{{ zombie.name }}</h4>
    </template>

    <b-list-group flush>
      <b-list-group-item v-if="isAttackCard">Owner: #{{ zombie.owner }}</b-list-group-item>
      <b-list-group-item>id: #{{ zombie.id }}</b-list-group-item>
      <b-list-group-item>Level: {{ zombie.level }}</b-list-group-item>
      <b-list-group-item>DNA: {{ zombie.dna }}</b-list-group-item>
      <b-list-group-item>Ready time: {{ zombie.readyTime }}</b-list-group-item>
      <b-list-group-item>Loss count: {{ zombie.lossCount }}</b-list-group-item>
      <b-list-group-item>Win count: {{ zombie.winCount }}</b-list-group-item>
    </b-list-group>

    <div v-if="isAttackCard">
      <b-button block variant="danger" @click.prevent="onAttackZombieHandle">Атаковать</b-button>
    </div>
  </b-card>
  <div v-else>Loading ...</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "ZombieCard",
  props: {
    id: {
      type: [Number, String],
      default: -1
    },
    isAttackCard: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    zombie: null,
  }),
  computed: {
    ...mapGetters('drizzle', ['drizzleInstance']),
    ...mapGetters('zombie', ['getCurrentZombie']),
  },
  methods: {
    ...mapActions('zombie', ['fetchZombie', 'ownerByZombieId', 'attackZombie']),
    onAttackZombieHandle() {
      if (this.isAttackCard) {
        this.attackZombie({ zombieId: this.getCurrentZombie.id, targetId: this.id });
      }
    }
  },
  async created() {
    if (this.id !== -1) {
      this.zombie = await this.fetchZombie({ zombieId: this.id, isAttackCard: this.isAttackCard })
    }
  },
}
</script>

<style scoped>

</style>

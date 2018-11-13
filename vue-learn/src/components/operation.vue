<template>
  <div class="vuex">
    vuex {{ $store.state.count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="other"></button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'increment',
        'decrement'
      ]),
      other () {
        this.$store.dispatch('asswecan');
      },
    }
  }
</script>
<style>

</style>

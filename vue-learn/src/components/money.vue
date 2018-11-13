<template>
  <div class="money">
    money {{$store.state.moneyModules.money}}
    <button @click="add">+ money</button>
    <button @click="readuce">- money</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions('moneyModules',[
        'add',
        'readuce'
      ])
    }
  }
</script>
<style>

</style>

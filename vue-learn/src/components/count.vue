<template>
  <div class="count">
    count {{$store.state.countModules.count}}
    <button @click="add(3)">+ count</button>
    <button @click="readuce">- count</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions('countModules',[
        'add',
        'readuce'
      ])
    }
  }
</script>
<style>

</style>

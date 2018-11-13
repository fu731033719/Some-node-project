<template>
  <div class="app">
    child component
    <slot></slot>
    {{ name }} {{ age }}
    <button type="button" name="button" @click="$emit('patch',name)"></button>
  </div>
</template>
<script>
  export default {
    name: 'com',
    props: ['age'],
    data () {
      return {
        name: 'com',
      }
    }
  }
</script>
<style lang="css">

</style>

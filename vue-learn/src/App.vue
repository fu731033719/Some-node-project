<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <com :age="age" @patch="msg">
      <h1>123</h1>
    </com> -->
    <!-- <operation></operation> -->
    <router-view></router-view>
    <router-link to="/">aaaa</router-link>
    <router-link to="/pageb">bbbb</router-link>
    <money></money>
    <count></count>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import com from './components/com.vue'
// import operation from './components/operation.vue'
import money from './components/money.vue'
import count from './components/count.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    // com,
    // operation,
    money,
    count
  },
  data () {
    return {
      age: 18
    }
  },
  methods: {
    msg(ag) {
      window.console.log(ag);
      this.age ++;
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

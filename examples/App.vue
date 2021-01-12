<template>
  <div id="app">
    <BottomGrow>
      <img alt="Vue logo" src="./assets/logo.png">
      <template v-slot:grow>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </template>
    </BottomGrow>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

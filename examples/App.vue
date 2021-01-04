<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div style="width:100%;height:300px;">
      <BottomGrow>
        <div>
          <img alt="Vue logo" src="./assets/logo.png">
        </div>
        <template v-slot:grow>
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>

      </BottomGrow>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {BottomGrow} from '../../packages/index'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BottomGrow
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

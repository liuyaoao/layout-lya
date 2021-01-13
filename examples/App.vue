<template>
  <div id="app">
    <div>
      <BottomGrow>
        <img alt="Vue logo" src="./assets/logo.png">
        <template v-slot:grow>
          <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>
      </BottomGrow>
    </div>
    <div>
      <RightGrow>
        <Vertical3Part>
          <template v-slot:top>
            <img alt="Vue logo2" src="./assets/logo.png">
          </template>
          <template v-slot:middle>
            <img alt="Vue logo2" src="./assets/logo.png">
          </template>
          <template v-slot:bottom>
            <img alt="Vue logo2" src="./assets/logo.png">
          </template>
        </Vertical3Part>
        <template v-slot:grow>
          <HelloWorld msg="Welcome to Your Vue.js App 2"/>
        </template>
      </RightGrow>
    </div>
    <div>
      <LeftGrow>
        <template v-slot:grow>
          <HelloWorld msg="Welcome to Your Vue.js App 2"/>
        </template>
        <Vertical2Part>
          <template v-slot:top>
            <img alt="Vue logo2" src="./assets/logo.png">
          </template>
          <template v-slot:bottom>
            <img alt="Vue logo2" src="./assets/logo.png">
          </template>
        </Vertical2Part>
      </LeftGrow>
    </div>

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

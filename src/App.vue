<template>
  <div id="app">
    <div class="d-flex justify-content-center">

      <img alt="Vue logo" src="./assets/logo.png" width="8%"/>

    </div>

    <div class="">

      <HelloWorld />
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
  color: #2c3e50;
  margin-top: 20px;
}
</style>

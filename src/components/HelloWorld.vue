<template>
  <div class="hello">
    <h1 class="text-light fw-bold " v-show="texto.length > 2">Welcome
      <span v-text="texto"></span>
    </h1>

    <input type="text" v-model="texto"> 
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data (){
    return {
      texto : "VUE"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

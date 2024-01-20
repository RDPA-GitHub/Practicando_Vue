<template>
  <div class="hello">

    <!-- <h1 class="text-light fw-bold " v-if="texto.length > 2">Welcome to
      <span v-text="texto"></span>
    </h1>
    <h1 v-else>
      Por favor escribe tu nombre
    </h1>

    <input type="text" v-model="texto">  -->

    <h2 class="fw-bold">
      Listas de Tareas
    </h2>

    <ol class="text-light">
      <li v-for="({title, completed}, i) in tareas" :key="i">
        <span v-text="title"></span>
        <small v-if="completed" class="text-success fw-bold"> -> Completa 😃</small>
        <small v-else class="text-danger fw-bold"> -> Incompleta 🫣</small>
      </li>
    </ol>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data (){
    return {
      texto : "VUE",
      tareas: [
        
        {
          title : "Aprender PHP",
          completed : true
        },
        {
          title : "Aprender Laravel",
          completed : true
        },
        {
          title : "Aprender Vue js",
          completed : false
        }
      ]
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
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="hello">

    <div class="container">
      <div class="row">
        <div class="col-md-12  ">

          <h1 class="text-light fw-bold text-center" v-if="texto.length > 2">Welcome to
            <span class="" v-text="texto"></span>
          </h1>
          <h1 class="text-center" v-else>
            Por favor escribe tu nombre
          </h1>

          <div  class=" mb-4 d-flex justify-content-center align-items-center " >

            <input type="text" class="form-control w-25 me-2" v-model="newTasks">
            <button @click="addTask" class="btn btn-success fw-bold fs-5 py-1">+</button>
          </div>


          <h2 class="fw-bold text-center">
            Listas de Tareas
          </h2>

          <div class="d-flex justify-content-center">
            <ol class="text-light">
              <li class="fw-bold" v-for="({ title, completed }, i) in tasks" :key="i">
                <span v-text="title"></span>
                <small v-if="completed" class="text-success fw-bold"> -> Completa 😃</small>
                <small v-else class="text-danger fw-bold"> -> Incompleta 🫣</small>
              </li>
            </ol>
          </div>



        </div>
      </div>
    </div>



  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data() {
    return {
      newTasks : "",
      texto: "VUE",
      tasks: [

        {
          title: "Aprender PHP",
          completed: true
        },
        {
          title: "Aprender Laravel",
          completed: true
        },
        {
          title: "Aprender Vue js",
          completed: false
        }
      ]
    }
  },
  methods:{
    addTask: function () {
    this.tasks.push({
      title: this.newTasks,
      completed: false
    })
    this.newTasks = "";
  }
  } 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

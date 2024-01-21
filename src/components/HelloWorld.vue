<template>
  <div class="hello">

    <div class="container">
      <div class="row">
        <div class="col-md-12  ">

          <h3 class="text-secondary fw-bold text-center mt-4" v-text="texto">
          </h3>

          <div class=" mb-4 d-flex justify-content-center align-items-center ">

            <input v-on:keyup.enter="addTask" type="text" class="form-control w-25 me-2" v-model="newTasks">
            <!-- <button @click="addTask" class="btn btn-success fw-bold fs-5 py-1">+</button> -->
          </div>

          <div class="fw-bold text-light">
            Numeros:
            <span class="text-success"> {{ reverseTask }}</span>
          </div>

          <p class="fw-bold text-center fs-4 ">
            Listas de Tareas
          </p>

          <div class="d-flex justify-content-center">
            <ol class="text-light">
              <li class="fw-bold d-flex justify-content-between" v-for="({ title, completed }, i) in tasks" :key="i">
                <span v-text="title"></span>
                <div class="form-check ms-4">

                  <input v-if="completed" @click="tasks[i].completed = false" type="checkbox"
                    class="form-check-input bg-info inputCheck" checked>

                  <input v-else @click="tasks[i].completed = true" type="checkbox"
                    class="form-check-input bg-light inputCheck">

                </div>

              </li>
            </ol>
          </div>



        </div>
      </div>
    </div>

    <pre class="text-light fw-bold">
    {{ $data }}
    </pre>



  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data() {
    return {
      newTasks: "",
      texto: "Agregando Tareas con VUE.js",
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
  methods: {
    addTask: function () {
      this.newTasks.length > 0
        ? (
          this.tasks.push({
            title: this.newTasks,
            completed: false
          }),
          this.newTasks = "")
        :
        alert('La tarea no puede estar vacia');

      console.log(this.tasks);
    }
  },
  computed: {
    reverseTask: function(){
      return this.newTasks.split('').reverse().join('');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.inputCheck {
  cursor: pointer;
}</style>

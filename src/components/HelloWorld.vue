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

          <div class="fw-bold">
            Tareas Completos:
            <span class="text-success"> {{ completedTasks }}</span>
          </div>

          <div class="fw-bold">
            Tareas Incompletos:
            <span class="text-success"> {{ IncompletedTasks }}</span>
          </div>

          <div class="fw-bold">
            Total Tareas:
            <span class="text-success"> {{ Totales }}</span>
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
                    class="bg-light form-check-input inputCheck">

                </div>

              </li>
            </ol>
          </div>



        </div>
      </div>
    </div>

  </div>
</template>

<script src="./js/code,js"></script>
<style scoped>
h3 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.inputCheck {
  cursor: pointer;
}
</style>

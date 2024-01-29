

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

    completedTasks: function() {

      console.log('Completado');

      return this.tasks.filter((task) => {
        return task.completed;
      }).length;
    },
    IncompletedTasks: function(){

      console.log('No Completado');

      return this.tasks.filter((task) => {
        return !task.completed;
      }).length;
    },

    Totales: function () {
      return this.tasks.length;
    }
  }


}
<template>

  <div id="mi-componente">
    <h1>Mi Componente</h1>
    <h2>{{ texto }}</h2>
  </div>

</template>

<script>
  export default {
    name: 'MiComponente',
    data () {
      return {
        texto: 'Este es mi nuevo componente'
      }
    }
  }
</script>
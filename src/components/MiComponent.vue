<template>

  <div id="micomponent">
    <h1>Mi Componente</h1>
    <h2>{{ texto }}</h2>
  </div>

</template>

<script>
  export default {
    name: 'MiComponent',
    data () {
      return {
        texto: 'Este es mi nuevo componente'
      }
    }
  }
</script>
<template>
  <div id="table-form">
    <form @submit.prevent="handleSubmit">
      <label>Planet name</label>
      <input v-model = "planet.name" type="text" />
      <label>Planet radius</label>
      <input v-model = "planet.radius" type="text" />
      <label>Planet distance</label>
      <input v-model = "planet.distance" type="text" />
      <button>Add Planet</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'planet-form',
  data() {
    return {
      planet: {
        name: '',
        radius: '',
        distance: '',
      },
    }
  },
  methods: {
    handleSubmit(){
      this.$emit('add:planet', this.planet)
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}
</style>
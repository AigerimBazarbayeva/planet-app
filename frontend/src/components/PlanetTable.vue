<template>
  <div id="planet-table">
    <p v-if="planets.length < 1" class="empty-table">No planets</p>
    <table v-else>
      <thead>
      <tr>
        <th>Planet name:</th>
        <th>Planet radius: (km)</th>
        <th>Planet distance: (mln km)</th>
        <th>Actions:</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="planet in planets" :key="planet.id">
        <td v-if="editing === planet.id">
          <input type="text" v-model="planet.name" />
        </td>
        <td v-else>{{ planet.name }}</td>
        <td v-if="editing === planet.id">
          <input type="number" v-model="planet.radius">
        </td>
        <td v-else>{{ planet.radius }}</td>
        <td v-if="editing === planet.id">
          <input type="number" v-model="planet.distance">
        </td>
        <td v-else>{{ planet.distance }}</td>
        <td v-if="editing === planet.id">
          <button @click="editPlanet(planet)">Save</button>
          <button class="muted-button" @click="cancelEdit(planet)">Cancel</button>
        </td>
        <td v-else>
          <button @click="editMode(planet)">Edit</button>
          <button @click="$emit('delete:planet', planet.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>

export default {
  name: 'planet-table',
  props: {
    planets: Array
  },
  data() {
    return {
      editing: null,
    }
  },
  methods: {
    editMode(planet) {
      this.cachedPlanet = Object.assign({}, planet)
      this.editing = planet.id
    },
    cancelEdit(planet) {
      Object.assign(planet, this.cachedPlanet)
      this.editing = null;
    },
    editPlanet(planet) {
      if(planet.name === '' || planet.radius === '' || planet.distance === '') return
      this.$emit('edit: planet', planet.id, planet)
      this.editing = null
    }
  }
}
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
</style>
<template>
  <div id="planet-table">
    <p v-if="planets.length < 1" class="empty-table">No planets</p>
    <table v-else>
      <thead>
      <tr>
        <th>Name:</th>
        <th>Radius: (km)</th>
        <th>Distance: (mln km)</th>
        <th>Actions:</th>
        <th>Choose:</th>
        
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
          <button @click="$emit('delete:planet', planet._id)">Delete</button>
        </td>
        <td>
          <input type="checkbox" @click="toggleCheckBox(planet)">
        </td>
      </tr>
      </tbody>
    </table>
    <p v-if="lastRequestedDistance != null"> Distance is {{ lastRequestedDistance }}</p>
    <button @click="calculateDistance()">Calculate</button>
  </div>
</template>
<script>

export default {
  name: 'planet-table',
  props: {
    planets: Array,
    lastRequestedDistance: Number
  },
  data() {
    return {
      editing: null,
      checkedPlanets: new Set()
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
      this.$emit('edit:planet', planet.id, planet)
      this.editing = null
    },
    toggleCheckBox(planet) {
      if(this.checkedPlanets.has(planet)){
        this.checkedPlanets.delete(planet)
      }else{
        this.checkedPlanets.add(planet)
      }
    },
    calculateDistance(){
      if(this.checkedPlanets.size != 2){
        alert("Choose two planets only!")
      }else{
        const arrayChecked = Array.from(this.checkedPlanets)
        this.$emit('calculate-distance', arrayChecked[0]._id, arrayChecked[1]._id)
      }
    }
  }
}
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
</style>
<template>
  <div id="app" class="small-container">
    <h1>Solar System Planets</h1>

    <planet-form @add:planet="addPlanet" />
    <planet-table
        :planets="planets"
        :lastRequestedDistance="lastRequestedDistance"
        @delete:planet="deletePlanet"
        @edit:planet="editPlanet"
        @calculate-distance="calculateDistance"
    />
  </div>
</template>

<script>

import PlanetTable from '@/components/PlanetTable.vue'
import PlanetForm from "@/components/PlanetForm.vue";
import axios from 'axios';

export default {
  name: 'app',
  components: {
    PlanetTable,
    PlanetForm,
  },
  data() {
    return {
      planets: [],
      lastRequestedDistance: null,
    }
  },
  async mounted(){
    this.getPlanets()
  },
  methods: {
    async getPlanets() {
      try{
        const response = await axios.get('http://localhost:3000/api/planets')
        const data =  response.data
        this.planets = data
      } catch(error) {
        console.error(error)
      }
    },
    async addPlanet(planet) {
      try{
        const response = await axios.post('http://localhost:3000/api/planets', planet)
        const data = response.data
        this.planets = [... this.planets, data]
      } catch(error){
        console.error(error)
      }
    },
    async deletePlanet(id) {
      try{
        await axios.delete('http://localhost:3000/api/planets/' + id)
        this.planets = this.planets.filter(planet => planet._id !== id);
      } catch (error) {
        console.error(error);
      }
    },
    async editPlanet(id, updatedPlanet){
      try{
        const response = await axios.put('http://localhost:3000/api/planets/' + id, updatedPlanet)
        const data = await response.data
        this.planets = this.planets.map(planet => (planet._id === id ? data: planet))
      } catch (error) {
        console.error(error)
      }
    },
    async calculateDistance(id1, id2) { 
        try{
          const response = await axios.get('http://localhost:3000/api/planets/distance/' + id1 + '/' + id2)
          this.lastRequestedDistance = response.data.distance
          console.log(response)
        } catch(error){
          console.error(error)
        }
      
      console.log()
    }
  }
}

</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>
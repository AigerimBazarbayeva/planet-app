<template>
  <div id="app" class="small-container">
    <h1>Solar System Planets</h1>

    <planet-form @add:planet="addPlanet" />
    <planet-table :planets="planets" />
  </div>
</template>

<script>

import PlanetTable from '@/components/PlanetTable.vue'
import PlanetForm from "@/components/PlanetForm.vue";

export default {
  name: 'app',
  components: {
    PlanetTable,
    PlanetForm,
  },
  data() {
    return {
      planets: [
        {
          id: 1,
          name: 'Earth',
          radius: '100',
          distance: '100',
        },
        {
          id: 2,
          name: 'Earth',
          radius: '100',
          distance: '100',
        },
        {
          id: 3,
          name: 'Earth',
          radius: '100',
          distance: '100',
        },
      ],
    }
  },
  methods: {
    addPlanet(planet) {
      const lastId =
          this.planets.length > 0
          ? this.planets[this.planets.length - 1].id
          : 0;
      const id = lastId + 1;
      const newPlanet = { ...planet, id};
      this.planets = [ ...this.planets, newPlanet];
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
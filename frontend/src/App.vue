<template>
  <div id="app" class="small-container">
    <h1>Solar System Planets</h1>

    <planet-table :planets="planets" />
  </div>
</template>

<script>

import PlanetTable from '@/components/PlanetTable.vue'

export default {
  name: 'app',
  components: {
    PlanetTable,
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
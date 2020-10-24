<template>
  <div id="planet-table">
    <table>
      <thead>
      <tr>
        <th>Planet name:</th>
        <th>Planet radius: (km)</th>
        <th>Planet distance: (mln km)</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="planet in planets" :key="planet.id">
        <td>{{ planet.name }}</td>
        <td>{{ planet.radius }}</td>
        <td>{{ planet.distance }}</td>
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
}
</script>

<style scoped></style>
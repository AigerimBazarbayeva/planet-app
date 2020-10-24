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
        <td>{{ planet.name }}</td>
        <td>{{ planet.radius }}</td>
        <td>{{ planet.distance }}</td>
        <td>
          <button>Edit</button>
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
}
</script>

<style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
</style>
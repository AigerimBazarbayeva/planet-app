<template>
  <div id="table-form">
    <form @submit.prevent="handleSubmit">
      <label>Planet name</label>
      <input
          ref="first"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model = "planet.name"
          @focus="clearStatus"
          @keypress="clearStatus"
      />
      <label>Planet radius</label>
      <input
          type="number"
          :class="{ 'has-error': submitting && invalidRadius}"
          v-model = "planet.radius"
          @focus="clearStatus"
      />
      <label>Planet distance</label>
      <input
          type="number"
          :class="{ 'has-error': submitting && invalidDistance}"
          v-model = "planet.distance"
          @focus="clearStatus"
      />
      <p v-if="error && submitting" class="error-message">
        Please fill out all required fields!
      </p>
      <p v-if="success" class="success-message">Planet successfully added!</p>
      <button>Add Planet</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'planet-form',
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      planet: {
        name: '',
        radius: '',
        distance: '',
      },
    }
  },
  computed: {
    invalidName() {
      return this.planet.name === ''
    },

    invalidRadius() {
      return this.planet.radius === ''
    },

    invalidDistance() {
      return this.planet.distance === ''
    }
  },
  methods: {
    handleSubmit(){
      this.submitting = true
      this.clearStatus()

      if(this.invalidName || this.invalidRadius || this.invalidDistance){
        this.error = true
        return
      }

      this.$emit('add:planet', this.planet)
      this.$refs.first.focus()
      this.planet = {
        name: '',
        radius: '',
        distance: '',
      }
      this.error = false
      this.success = true
      this.submitting = false
    },

    clearStatus() {
      this.success = false
      this.error = false
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*='-message'] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
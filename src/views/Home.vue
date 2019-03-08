<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <form @submit.prevent="search" class="form-group">
          <label for="exampleInputFood">Enter the food that you ate.</label>
          <input type="text" class="form-control" v-model="query" id="exampleInputFood" aria-describedby="emailHelp"
            placeholder="What did you eat?" required>
          <button type="submit" class="btn btn-primary m-3 shadow">Submit</button>
        </form>
      </div>
    </div>
    <nutrition></nutrition>
  </div>
</template>

<script>
  import Nutrition from '@/components/Nutrition.vue'
  import Results from '@/components/Results.vue'
  export default {
    name: 'home',
    data() {
      return{
        query: ''
      }
    },
    mounted() {
      this.$store.dispatch('initialize')
    },
    computed: {
   
    },
    methods: {
      search() {
        this.$store.dispatch('getFood', this.query)
      }
    },
    components: {
      Nutrition,
      Results
    }
  }
</script>

<style>

  form {
    width: 25%;
  }

</style>
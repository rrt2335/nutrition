<template>
    <div class="details container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                    <router-link :to="{name: 'home'}">Go back</router-link>
                <div class="card" style="width: 56rem;">
                    <img class="card-img-top" 
                    :src="foodItem.photo.thumb" alt="Card image cap">
                    <div class="card-body">
                       <ul>
                           <h3>Nutrition list</h3>
                           {{foodItem.food_name}}
                           <results></results>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'details',
        props: ['id'],
        mounted() {},
        computed: {
            foodItem() {
                return this.$store.state.nutrition.find(f => f.ndb_no == this.id) || {}
            }
        },
        methods: {}
    }

</script>

<style>

</style>
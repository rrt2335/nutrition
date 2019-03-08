<template>
    <div class="nutrition row">
        <div class="col-12 d-flex justify-content-center">
            <div class="card" style="width: 18rem;" v-for="food in nutrition">
                <img class="card-img-top"
                    :src="food.photo.highres"
                    alt="Card image cap">
                <div class="card-body">
                    <router-link :to="{name: 'details', params: {id: food.ndb_no}}">
                        {{food.food_name}}</router-link>
                    <!-- <results></results> -->
                </div>
            </div>
        </div>
        <!-- <details-view></details-view> -->
    </div>
</template>

<script>
    export default {
        name: 'nutrition',
        data() {
            return {
                activeFood: {}
            }
        },
        computed: {
            nutrition() {
                return this.$store.state.nutrition
            }
        },
        methods: {
            setActiveFood(food) {
                this.activeFood = food;
            }
        }
    }
</script>

<style>
</style>
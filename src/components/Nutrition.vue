<template>
    <div class="nutrition row">
        <div class="col-12 d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gv18YBush7NaXCWqNJOb5EMpIYxlld2S2k88KBP7U4bhVVzI"
                    alt="Card image cap">
                <div class="card-body">
                    <router-link :to="{name: 'details', params: {id: food.ndb_no}}" v-for="food in nutrition">
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
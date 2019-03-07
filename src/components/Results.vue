<template>
    <div class="results row d-flex justify-content-around">
        <div class="col-5 yellow">
            <ol>
                <li>Results</li>
            </ol>
        </div>
        <details-view></details-view>
    </div>
</template>


<script>
    export default {
        name: 'results',
        data() {
            return {
                activeFood: {}
            }
        },
        computed: {
            results() {
                return this.$store.state.results
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
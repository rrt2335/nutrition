<template>
    <div class="details container">
        <div class="row">
            <div class="col-12">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" alt="Card image cap">
                    <div class="card-body">
                       <ul>
                           <h1>Nutrition list</h1>
                           <router-link :to="{name: 'home'}">Switch views</router-link>
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
            details() {
                return this.$store.state.details
            }
        },
        methods: {}
    }

</script>

<style>

</style>
<template>
    <div class="details container">
        <div class="row">
            <div class="col-12">
                <router-link id="router" class="text-center" :to="{name: 'home'}">Go back</router-link>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="foodItem.photo.highres" alt="Card image cap">
                    <div class="card-body">
                        <h2>{{foodItem.food_name[0].toUpperCase() + foodItem.food_name.substr(1)}}</h2>
                        <h5>Serving quantity:<br>{{foodItem.serving_qty}} {{foodItem.serving_unit}}, {{foodItem.serving_weight_grams}} g</h5>
                        <ul class="text-left">
                            <li>Calories: {{foodItem.nf_calories}} g</li>
                            <li>Saturated fat: {{foodItem.nf_saturated_fat}} g</li>
                            <li>Potassium: {{foodItem.nf_potassium}} mg</li>
                            <li>Carbohydrate: {{foodItem.nf_total_carbohydrate}} g</li>
                            <li>Sodium: {{foodItem.nf_sodium}} mg</li>
                            <li>Sugars: {{foodItem.nf_sugars}} g</li>
                            <li>Protein: {{foodItem.nf_protein}} g</li>
                        </ul>
                        <results></results>
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
        mounted() { },
        computed: {
            foodItem() {
                return this.$store.state.nutrition.find(f => f.ndb_no == this.id) || {}
            }
        },
        methods: {}
    }

</script>

<style>
    #router {
        color: white;
        font-weight: 700;
        padding: 5px;
        background-color:#007bff;
    }
</style>
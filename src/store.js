import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { stat } from 'fs';
// import Router from 'router'

var _api = Axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  timeout: 3000,
  headers: {
    'x-app-key': "8120134b8a361912934e53e415fffd2c",
    "x-app-id": "814a7db9"
  }
})

var _sandboxApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/tasty/logs/5c819f0fb5fbe5001440b394'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nutrition: [],
    activeFood: {},
    results: []
  },
  mutations: {
    setNutrition(state, data) {
      state.nutrition = data
    },
    setResults(state, data) {
      state.results = data
    },
    setActiveFood(state, data){
      state.activeFood = data
    }
  },
  actions: {
    initialize({ commit }) {
      _sandboxApi.get()
        .then(res => {
          commit('setNutrition', res.data.data.foods)
        })

    },
    setActiveFood({commit}, payload){
      commit('setActiveFood', payload)
    },
    getFood( {commit}, payload) {
      _api.post('', {query: payload})
        .then(res => {
          console.log(res)
          commit('setNutrition', res.data.foods)
        })
    }
  }
})
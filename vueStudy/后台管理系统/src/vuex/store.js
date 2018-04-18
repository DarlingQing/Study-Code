import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state :{
        count: 0,
        totalCount: 0
    },
    getters: {

    },
    mutations: {
        incremnet(state){
            state.count ++
        }
    },
    actions: {

    }
})

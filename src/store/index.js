import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:1
    },
    //mutations
    mutations:{
        mutationsAddCount(state, n = 0) {
            return (state.count += n)
        },
        mutationsReduceCount(state, n = 0) {
            return (state.count -= n)
        }
    },
    //actions 
    actions:{
        actionsAddCount(context, n = 0) {
            console.log(context)
            return context.commit('mutationsAddCount', n)
        },
        actionsReduceCount({ commit }, n = 0) {
            return commit('mutationsReduceCount', n)
        }
    },
    //getters
    getters:{
        getterCount(state, n = 0) {
            return (state.count += n)
        }
        // getterCount(state) {
        //     return (state.count += 10)
        // }
    }
})
 
export default store
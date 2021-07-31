import { createStore } from 'vuex'
const defaultState = {
    count: 0
}

export default createStore({
    state() {
        return defaultState
    },
    getters: {
        double(state: typeof defaultState) {
            return state.count * 2
        }
    },
    mutations: {
        increment(state: typeof defaultState) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    }
})
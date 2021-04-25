export default {
    namespaced: true,

    state: {
        user: [],
    },

    getters: {
        user (state) {
            return state.user
        },
    },

    mutations: {
        setUser (state, value) {
            state.user = value
        }
    },

    actions: {

    }
}
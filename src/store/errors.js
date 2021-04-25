export default {
    namespaced: true,

    state: {
        error: false,
        errors: [],
    },

    getters: {
        error (state) {
            return state.error
        },
        errors (state) {
            return state.errors
        },
    },

    mutations: {
        setErrors (state, value) {
            state.error = true;
            state.errors = value;
        },
        removeErrors (state) {
            state.error = false;
            state.errors = []
        }
    },

    actions: {
        dropErrors ({commit}) {
            commit('removeErrors');
        }
    }
}
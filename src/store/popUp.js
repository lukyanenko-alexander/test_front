export default {
    namespaced: true,

    state: {
        message: '',
    },

    getters: {
        message (state) {
            return state.message
        }
    },

    mutations: {
        setMessage (state, value) {
            state.message = value;
        },
        removeMessage (state) {
            state.message = '';
        }
    },

    actions: {
        dropMessage ({commit}) {
            commit('removeMessage');
        }
    }
}
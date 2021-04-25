import axios from 'axios'
import router from "../router";

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null
    },

    getters: {
        authenticated (state) {
            return state.authenticated
        },

        user (state) {
            return state.user
        },
    },

    mutations: {
        SET_AUTHENTICATED (state, value) {
            state.authenticated = value
        },

        SET_USER (state, value) {
            state.user = value
        }
    },

    actions: {
        async signIn (context, credentials) {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/login', credentials).then(response => {
                context.commit('error/removeErrors', {}, {root:true});
                context.commit('popUp/setMessage', response.data.message, {root:true});
                context.dispatch('me');
                router.replace('/')
            })
                .catch(errors=>{
                    context.commit('popUp/removeMessage', {}, {root:true});
                    context.commit('error/setErrors', errors.response.data.errors, {root:true});
                })
        },

        register(context, credentials) {
            axios.post('/register', credentials).then(response => {
                context.commit('error/removeErrors', {}, {root:true});
                context.commit('popUp/setMessage', response.data.message, {root:true});
                router.replace('/');
                location.reload();
            })
                .catch(errors => {
                    context.commit('popUp/removeMessage', {}, {root:true});
                    context.commit('error/setErrors', errors.response.data.errors, {root:true});
                })
        },

        async signOut ({ dispatch }) {
            await axios.post('/logout');

            return dispatch('me');
        },

        me ({ commit }) {
            return axios.get('/api/user').then((response) => {
                commit('SET_AUTHENTICATED', true)
                commit('SET_USER', response.data)
            }).catch(() => {
                commit('SET_AUTHENTICATED', false)
                commit('SET_USER', null)
            })
        }
    }
}
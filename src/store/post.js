import axios from 'axios'

export default {
    namespaced: true,

    state: {
        post: [],
        posts: [],
    },

    getters: {
        post (state) {
            return state.post
        },
        posts (state) {
            return state.posts
        },
    },

    mutations: {
        setPost (state, value) {
            state.post = value
        },
        setPosts (state, value) {
            state.posts = value
        },
    },

    actions: {
        getPost ({commit}, id) {
            return axios.get('/api/posts/' + id)
                .then(response => {
                    console.log(response.data.result);
                    commit('setPost', response.data.result)
                    commit('user/setUser', response.data.result.user, {root:true})
                })
        },
        createPost ({commit}, attributes) {
            return axios.post('/api/posts', attributes)
                .then(response => {
                    console.log(response.data.result);
                    commit('error/removeErrors', {}, {root:true})
                    commit('popUp/setMessage', response.data.message, {root:true})
                })
                .catch(errors => {
                    console.log(errors.response.data)
                    commit('popUp/removeMessage', {}, {root:true})
                    commit('error/setErrors', errors.response.data.errors, {root:true})
                })
        },
    }
}
import axios from 'axios'

export default {
    namespaced: true,

    state: {
        category: [],
        categories: [],
    },

    getters: {
        category (state) {
            return state.category
        },
        categories (state) {
            return state.categories
        },
    },

    mutations: {
        setCategoryPosts (state, value) {
           state.category = value
        },
        setCategories (state, value) {
           state.categories = value
        }
    },

    actions: {
        getCategoryWithPost ({commit}, id) {
            return axios.get('/api/categories/' + id)
                .then(response => {
                    console.log(response.data.result);
                    commit('setCategoryPosts', response.data.result)
                })
        },
        getCategories ({commit}) {
            return axios.get('/api/categories')
                .then(response => {
                    console.log(response.data.result);
                    commit('setCategories', response.data.result)
                })
        },
    }
}
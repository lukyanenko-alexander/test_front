import axios from "axios";

export default {
    namespaced: true,

    state: {
    },

    getters: {
    },

    mutations: {
    },

    actions: {
        ratePost (context, attributes) {
            return axios.post('/api/rates', attributes)
                .then(response => {
                    console.log(response.data.result);
                    context.commit('error/removeErrors', {}, {root:true})
                    context.commit('popUp/setMessage', response.data.message, {root:true})
                    context.dispatch('post/getPost', attributes.post_id, {root:true})
                })
                .catch(errors => {
                    console.log(errors.response.data)
                    context.commit('popUp/removeMessage', {}, {root:true})
                    context.commit('error/setErrors', errors.response.data.errors, {root:true})
                })
        },
    }
}
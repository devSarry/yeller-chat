import state from './state'

export const mutations = {
    LOGIN: 'auth/LOGIN',
    LOGOUT: 'auth/LOGOUT'
}

export default {
    // Login
    [mutations.LOGIN](state, { token, user, error }) {
        state.token = token
        state.user = user
        state.error = error
    },

    // Logout
    [mutations.LOGOUT](state) {
        state.token = null
        state.user = null
        state.error = null
    }
}

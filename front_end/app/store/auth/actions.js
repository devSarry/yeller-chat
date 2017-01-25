import { mutations } from './mutations'
import api from '../../api'

export default {
    // Login
    /* Auth object */
    /*  { type: local || github || facebook || google ,
    *       email: string
    *       password: string                              */
    login({commit}, auth) {
        api.authenticate(auth).then(function(result){
            let user = result.data;
            let token = result.token;
            //set the user object and token
            commit(mutations.LOGIN, {user, token});
            console.log('Authenticated!', result);
        }).catch(function(error){
            console.error('Error authenticating!', error);
        });

    },

    // Logout
    logout({commit}) {
        app.logout();
        commit(mutations.LOGOUT)
    }
}

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
            console.log('Authenticated!', user);
            let token = result.token;
            //set the user object and token
            commit(mutations.LOGIN, {user, token});
            console.log('Authenticated!', result);
        }).catch(function(error){
            commit(mutations.LOGIN, {error})
             console.error('Error authenticating!', error);
        });
    },
    tokenLogin({commit}) {
        api.authenticate().then(function(result){
            let user = result.data;
            console.log('Authenticated!', user);
            let token = result.token;
            //set the user object and token
            commit(mutations.LOGIN, {user, token});
            console.log('Authenticated!', result);
        }).catch(function(error){
            
            // console.error('Error authenticating PENIS!', error);
        });
    },

    // Logout
    logout({commit}) {
        api.logout();
        console.log(api.logout())
        console.log('dispacted logout')
        commit(mutations.LOGOUT)
    }
}

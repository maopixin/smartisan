import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        shops:[]
    },
    mutations:{
        changeCarShops(state,payload){
            state.shops.push(payload.skuData)
        }
    }

});
export default store;
import Vue from 'vue';
import Vuex from "vuex";
import actions from './action';
import mutations from './mutation';
Vue.use(Vuex);

interface State {
    login: boolean,
    searchVal: string,
    shops: GlobalVal.Shop[]
}

let state: State = {
    login: false,
    searchVal: '',
    shops: []
}

export default new Vuex.Store({
    state,
    actions,
    mutations
});

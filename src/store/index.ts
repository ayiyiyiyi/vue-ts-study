import Vue from 'vue';
import Vuex from "vuex";
import actions from './action';
import mutations from './mutation';
Vue.use(Vuex);

interface State {
    login: boolean,
    searchVal: string,
    banners: GlobalVal.Banner[],
    ads: GlobalVal.Ads[],
    shops: GlobalVal.Shop[]
}

let state: State = {
    login: false,
    searchVal: '',
    shops: [],
    ads: [],
    banners: []
}

export default new Vuex.Store({
    state,
    actions,
    mutations
});

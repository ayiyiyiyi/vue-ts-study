import { ActionTree } from "vuex";
import axios from 'axios'

let actions: ActionTree<any, any> = {
    async initAjax({ dispatch }) {
        dispatch('getBannerList')
        dispatch('getAdsList')
        dispatch('getShopList')
    },
    async getBannerList({ commit }) {
        let res: GlobalVal.AjaxResponse = await axios.get('/banner').then((res) => res.data).catch((e: any) => console.log(e))
        if (res && res.code == 200) commit('SET_BANNERLIST',res.data.list);
    },
    async getAdsList({ commit }) {
        let res: GlobalVal.AjaxResponse = await axios.get('/advertising').then((res) => res.data).catch((e: any) => console.log(e))
        if (res && res.code == 200) commit('SET_ADSLIST',res.data.list);
    },
    async getShopList({ commit }) {
        let res: GlobalVal.AjaxResponse = await axios.get('/shops').then((res) => res.data).catch((e: any) => console.log(e));
        if (res && res.code == 200) commit('SET_SHOPLIST',res.data.list);
    },
    setSearchVal({commit}, val: string) {
        commit('SET_SEARCH_VAL', val);
    }
}
export default actions;
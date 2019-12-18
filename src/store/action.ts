import { ActionTree } from "vuex";
import axios from 'axios'

let actions: ActionTree<any, any> = {
    async initAjax({ dispatch }) {
        dispatch('getShopList')
    },
    async getShopList({ commit }) {
        let res: GlobalVal.AjaxResponse = await axios.get('/shops').then((res) => res.data).catch((e: string) => console.log(e));
        if (res && res.code == 200) commit('SET_SHOPLIST',res.result.list);
    },
    setSearchVal({commit}, val: string) {
        commit('SET_SEARCH_VAL', val);
    }
}
export default actions;
import { MutationTree } from "vuex";

let mutations: MutationTree<any> = {
    SET_SHOPLIST(state, data): void {
        state.shops = data
    },
    SET_SEARCH_VAL(state, data): void {
        state.searchVal = data
    }
}
export default mutations;
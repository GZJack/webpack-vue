
// 导入vue
import Vue from 'vue';
// 导入vuex
import Vuex  from 'vuex';

Vue.use(Vuex);

// 工具的使用
import Tools from './Tools.js';
let tool = new Tools();
// 整体引入
import AllGather from '../pages/allStoreGather.js';
let {state,mutations,getters,actions,mTypes,aTypes} = tool.gatherAllStore(AllGather);
export const $mTypes = mTypes || {};
export const $aTypes = aTypes || {};





export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    strict:true
});
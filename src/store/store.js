import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  tableData: []
}

const getters = { 
  tableList: state => state.tableData
};

const actions = {
  async fetchTable({commit}){
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    commit("setTableData", response.data)
  },
}

const mutations = {
  setTableData: (state, table) => (
    state.tableData = table
  ),
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
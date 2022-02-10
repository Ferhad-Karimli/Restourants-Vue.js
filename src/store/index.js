import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    dataList: [],
    
  },
  getters : {
    DataList(state) {
      return state.dataList;
    }
  },
  mutations: {
    updateDataList(state, data) {
      state.dataList = data;
    }
  },
  actions: {
    getDataList({commit, state}) {
      axios.get("http://localhost:3001/restaurant")
      .then(response => {
        commit("updateDataList", response.data)
        console.log(state.dataList)
      
      })
      .catch(err => console.log(err))
    }
  }
})

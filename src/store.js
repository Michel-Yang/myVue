import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    useInfo: {
      userName: "",
      passWord: ""
    }

  },
  mutations: {
    increment(state,obj) {
    	state.useInfo=obj;
    /*  state.useInfo.userName=username;
      state.useInfo.passWord=password;*/
    }

  },
  actions: {

  }
})

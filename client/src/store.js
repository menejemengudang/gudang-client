import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isLogin: '',

  },
  mutations: {


  },
  actions: {
    getLogin(context) {
      // context.commit("cekLogin")
      var token = localStorage.getItem("tg");
      // console.log(token, "ini token");
      // console.log(this.state);

      if (token !== null || token !== undefined) {
        console.log('masuk undifinde');

        this.state.isLogin = false;
      } else {
        console.log('masuk benar');

        this.state.isLogin = true;
      }
    }
  },
});

import Vue from 'vue';
import Vuex from 'vuex';
import Projects from './modules/Projects';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Projects,
  },
});

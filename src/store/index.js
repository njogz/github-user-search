import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    fetchingUsers: false,
  },
  mutations: {
    SET_USERS: (state, data) => {
      Vue.set(state, 'users', data);
    },
    DONE_FETCHING: (state) => {
      Vue.set(state, 'fetchingUsers', false);
    },
    FETCHING_USERS: (state) => {
      Vue.set(state, 'fetchingUsers', true);
    },
  },
  actions,
  getters: {
    getUsers: (state) => state.users,
    fetchingUsers: (state) => state.fetchingUsers,
  },
});

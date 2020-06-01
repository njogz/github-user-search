import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fetchingUsers: false,
    userPages: {},
    userCount: 0,
  },
  mutations: {
    SET_USERS: (state, data) => {
      Vue.set(state.userPages, data.page, data.data);
    },
    DONE_FETCHING: (state) => {
      Vue.set(state, 'fetchingUsers', false);
    },
    FETCHING_USERS: (state) => {
      Vue.set(state, 'fetchingUsers', true);
    },
    CURRENT_QUERY: (state, query) => {
      Vue.set(state, 'query', query);
    },
    TOTAL_USER_COUNT: (state, count) => {
      Vue.set(state, 'userCount', count);
    },
    RESET_USERS: (state) => {
      Vue.set(state, 'userPages', {});
    },
  },
  actions,
  getters: {
    getPage: (state) => (page) => state.userPages[page],
    fetchingUsers: (state) => state.fetchingUsers,
    getQuery: (state) => state.query,
    getUserCount: (state) => state.userCount,
  },
});

import axios from 'axios';

export default {
  searchUsers: async ({ commit, getters }, params) => {
    try {
      const { query, page } = params;
      commit('FETCHING_USERS');
      // reset if query is new
      const currentQuery = getters.getQuery;
      if (currentQuery !== query) {
        commit('RESET_USERS');
      }
      // check if the page is already in the state
      if (!getters.getPage(page)) {
        const { data } = await axios.get(
          `https://api.github.com/search/users?q=${query}&per_page=20&page=${page}`,
        );
        commit('SET_USERS', { page, data: data.items });
        commit('TOTAL_USER_COUNT', data.total_count);
        commit('CURRENT_QUERY', query);
      }
      commit('DONE_FETCHING');
      return {
        success: true,
      };
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  },
  getUser: async ({ commit, getters }, user) => {
    try {
      if (!getters.getUser(user.name)) {
        const { data } = await axios.get(user.url);
        commit('SET_USER_PROFILE', { name: user.name, data });
      }
      return {
        success: true,
      };
    } catch (err) {
      return {
        success: false,
        error: err,
      };
    }
  },
};

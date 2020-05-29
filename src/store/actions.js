import axios from 'axios';

export default {
  searchUsers: async ({ commit }, query, page = 1) => {
    try {
      commit('FETCHING_USERS');
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}&per_page=50&page=${page}`,
      );
      commit('SET_USERS', data.items);
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
};

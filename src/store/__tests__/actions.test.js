import actions from '../actions';

describe('vuex actions', () => {
  it('makes the correct mutations on fetching users', async () => {
    const commit = jest.fn();
    const getters = {
      getQuery: jest.fn(),
      getPage: jest.fn(),
    };
    getters.getQuery.mockReturnValue('mock');
    getters.getPage.mockReturnValue(undefined);
    await actions.searchUsers({ commit, getters }, { page: 1, query: 'alice' });
    expect(commit.mock.calls).toHaveLength(6);
    expect(commit.mock.calls[0][0]).toEqual('FETCHING_USERS');
    expect(commit.mock.calls[1][0]).toEqual('RESET_USERS');
    expect(commit.mock.calls[2][0]).toEqual('SET_USERS');
    expect(commit.mock.calls[2][1]).toEqual({ page: 1, data: [] });
    expect(commit.mock.calls[3][0]).toEqual('TOTAL_USER_COUNT');
    expect(commit.mock.calls[3][1]).toEqual(12);
    expect(commit.mock.calls[4][0]).toEqual('CURRENT_QUERY');
    expect(commit.mock.calls[4][1]).toEqual('alice');
    expect(commit.mock.calls[5][0]).toEqual('DONE_FETCHING');
  });
  it('makes the correct mutations on fetching a user profile', async () => {
    const commit = jest.fn();
    const getters = {
      getUser: jest.fn(),
    };
    getters.getUser.mockReturnValue(undefined);
    await actions.getUser({ commit, getters }, { name: 'bob', url: '/bob' });
    expect(commit.mock.calls).toHaveLength(1);
    expect(commit.mock.calls[0][0]).toEqual('SET_USER_PROFILE');
    expect(commit.mock.calls[0][1]).toEqual({ name: 'bob', data: "bob's profile" });
  });
});

export default {
  // get: () => Promise.resolve({ data: 'value' }),
  get: jest.fn((url) => {
    if (url === 'https://api.github.com/search/users?q=alice&per_page=20&page=1') {
      return {
        data: {
          total_count: 12,
          items: [],
        },
      };
    }
    if (url === '/bob') {
      return {
        data: "bob's profile",
      };
    }
    return {};
  }),
};

import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import SearchResults from '@/components/SearchResults.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe('SearchResults.vue', () => {
  let vuetify;
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();
    actions = {
      getUser: jest.fn(),
    };
    getters = {
      getPage: () => jest.fn(),
      getQuery: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      getters,
    });
  });

  it('Should match the saved snapshot', () => {
    const wrapper = shallowMount(SearchResults, {
      localVue,
      vuetify,
      store,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

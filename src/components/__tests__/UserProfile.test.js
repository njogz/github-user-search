import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe('UserProfile.vue', () => {
  let vuetify;
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();
    actions = {
      getUser: () => jest.fn(),
    };
    getters = {
      getUser: () => jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      getters,
    });
  });

  it('Should match the saved snapshot', () => {
    const wrapper = shallowMount(UserProfile, {
      localVue,
      vuetify,
      store,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

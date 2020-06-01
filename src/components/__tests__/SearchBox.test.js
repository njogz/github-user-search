import { shallowMount, createLocalVue, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import SearchBox from '@/components/SearchBox.vue';

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe('SearchBox.vue', () => {
  let vuetify;
  let actions;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();
    actions = {
      searchUsers: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('Should match the saved snapshot', () => {
    const wrapper = shallowMount(SearchBox, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Should trigger a vuex action with whatever is in the text field', () => {
    const wrapper = mount(SearchBox, {
      localVue,
      vuetify,
      store,
    });
    wrapper.find('[data-query]').setValue('alice');
    wrapper.find('[data-search]').trigger('click');
    expect(actions.searchUsers.mock.calls[0][1]).toEqual({ page: 1, query: 'alice' });
  });
});

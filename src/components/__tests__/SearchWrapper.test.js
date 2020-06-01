import { shallowMount, createLocalVue } from '@vue/test-utils';
import SearchWrapper from '@/components/SearchWrapper.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('SearchWrapper.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('Should match the saved snapshot', () => {
    const wrapper = shallowMount(SearchWrapper, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

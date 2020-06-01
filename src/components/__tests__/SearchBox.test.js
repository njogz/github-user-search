import { shallowMount, createLocalVue } from '@vue/test-utils';
import SearchBox from '@/components/SearchBox.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
localVue.use(Vuetify);

describe('SearchBox.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it('Should match the saved snapshot', () => {
    const wrapper = shallowMount(SearchBox, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

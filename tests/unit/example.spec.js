import { shallowMount } from '@vue/test-utils';
import SearchWrapper from '@/components/SearchWrapper.vue';

describe('SearchWrapper.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(SearchWrapper, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

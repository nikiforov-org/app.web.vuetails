import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import App from './App.vue';
import Navbar from './components/Navbar/Navbar.vue';
import Pages from './components/Pages/Pages.vue';

describe('App.vue', () => {
  it('renders Navbar and Pages components', () => {
    const wrapper = mount(App);

    // Check that Navbar and Pages components are rendered
    expect(wrapper.findComponent(Navbar).exists()).toBe(true);
    expect(wrapper.findComponent(Pages).exists()).toBe(true);
  });
});

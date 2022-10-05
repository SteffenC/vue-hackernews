/* eslint-disable */
import { ComponentCustomProperties } from 'vue';
import { store, State } from '@/store';

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface ComponentCustomProperties {
    $store: store<State>
  }
}

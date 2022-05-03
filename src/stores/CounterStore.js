import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      name: 'Danilo',
      counter: 0,
    };
  },
});

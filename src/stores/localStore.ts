import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

export const useLocalStore = defineStore('header', {
  state: () => ({
    darkmode: LocalStorage.getItem('darkmode'),
  }),

  getters: {
    darkmodeState: (state) => state.darkmode,
  },
});

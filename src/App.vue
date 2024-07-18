<template>
  <router-view class="font" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar, LocalStorage } from 'quasar';
import { useLocalStore } from 'stores/localStore';

export default defineComponent({
  name: 'App',
  setup() {
    const q = useQuasar();
    const localStore = useLocalStore();

    // setup localStore
    if (localStore.darkmodeState == null) {
      localStore.darkmode = true;
    }
    q.dark.set(localStore.darkmodeState);
    localStore.$subscribe((mutation, state) => {
      LocalStorage.set('darkmode', state.darkmode);
    });
    return { q, localStore };
  },
  computed: {
    darkmode() {
      return this.localStore.darkmode;
    },
  },
  watch: {
    darkmode(valChanged) {
      this.q.dark.set(valChanged);
    },
  },
});
</script>

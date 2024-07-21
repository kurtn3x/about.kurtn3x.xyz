<template>
  <q-page>
    <div class="row justify-center">
      <q-tabs v-model="tab" align="center" class="gt-xs">
        <q-tab
          name="contact"
          icon="call"
          label="Contact"
          style="width: 150px"
        />
        <q-tab name="sites" icon="web" label="Sites" style="width: 150px" />
        <q-tab
          name="socials"
          icon="public"
          label="Socials"
          style="width: 150px"
        />
      </q-tabs>
      <q-tabs v-model="tab" align="center" class="lt-sm">
        <q-tab
          name="contact"
          icon="call"
          label="Contact"
          style="width: 100px"
        />
        <q-tab name="sites" icon="web" label="Sites" style="width: 100px" />
        <q-tab
          name="socials"
          icon="public"
          label="Socials"
          style="width: 100px"
        />
      </q-tabs>
    </div>
    <q-btn
      style="width: 115px; height: 48px"
      flat
      class="bg-layout-bg text-layout-text absolute-bottom-left"
      :label="darkmodeToogle ? 'Light' : 'Dark'"
      @click="darkmodeChanged"
      :icon="darkmodeToogle ? 'light_mode' : 'dark_mode'"
    />
    <q-tab-panels
      v-model="tab"
      animated
      :class="darkmode ? 'bg-page-dark' : 'bg-white'"
    >
      <q-tab-panel name="contact" class="row justify-center">
        <q-card
          bordered
          flat
          :class="darkmode ? 'bg-page-dark' : 'bg-white'"
          class="q-ma-md"
          style="width: 700px"
        >
          <div class="q-ma-sm">
            <div class="text-h2 text-center q-mt-lg text-weight-bolder">
              Contact
            </div>
            <q-separator class="q-mt-lg q-mb-lg" inset />
            <div class="text-h4 text-center text-weight-bolder">Mail</div>
            <div class="row justify-center q-mt-md">
              <q-item
                clickable
                class="text-h5"
                @click="copyToClipboard('kurtn3x@gmail.com')"
                >kurtn3x@gmail.com
                <q-tooltip
                  :class="
                    darkmode ? 'bg-page-dark text-white' : 'bg-white text-dark'
                  "
                  class="text-body1"
                  anchor="center end"
                  self="center start"
                >
                  Copy
                </q-tooltip>
              </q-item>
            </div>
            <div class="row justify-center q-mt-md">
              <q-item
                clickable
                class="text-h5"
                @click="copyToClipboard('kurtn3x@proton.me')"
                >kurtn3x@proton.me
                <q-tooltip
                  :class="
                    darkmode ? 'bg-page-dark text-white' : 'bg-white text-dark'
                  "
                  class="text-body1"
                  anchor="center end"
                  self="center start"
                >
                  Copy
                </q-tooltip></q-item
              >
            </div>

            <q-separator class="q-mt-lg q-mb-lg" inset />
            <div class="text-h4 text-center text-weight-bolder">Discord</div>
            <div class="row justify-center q-mt-md q-mb-lg">
              <q-item
                clickable
                class="text-h5"
                @click="copyToClipboard('nex1233')"
                >nex1233
                <q-tooltip
                  :class="
                    darkmode ? 'bg-page-dark text-white' : 'bg-white text-dark'
                  "
                  class="text-body1"
                  anchor="center end"
                  self="center start"
                >
                  Copy
                </q-tooltip></q-item
              >
            </div>
          </div>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="sites" class="row justify-center">
        <q-card
          bordered
          flat
          :class="darkmode ? 'bg-page-dark' : 'bg-white'"
          class="q-ma-md"
          style="width: 700px"
        >
          <div class="q-ma-sm">
            <div class="text-h2 text-center q-mt-lg text-weight-bolder">
              Sites
            </div>
            <q-separator class="q-mt-lg q-mb-lg" inset />
            <div class="text-h5 text-center text-weight-bolder">
              <a
                class="text-blue"
                href="https://www.kurtn3x.xyz"
                target="_blank"
                >www.kurtn3x.xyz</a
              >
            </div>
            <div class="row justify-center q-mt-md text-h6 text-center">
              File Sharing, Administrative Tasks
            </div>

            <q-separator class="q-mt-lg q-mb-lg" inset />
            <div class="text-h5 text-center text-weight-bolder">
              <a
                class="text-blue"
                href="https://api.kurtn3x.xyz"
                target="_blank"
                >api.kurtn3x.xyz</a
              >
            </div>
            <div class="row justify-center q-mt-md text-h6 text-center">
              REST-API for www.kurtn3x.xyz
            </div>

            <q-separator class="q-mt-lg q-mb-lg" inset />
            <div class="text-h5 text-center text-weight-bolder">
              <a
                class="text-blue"
                href="https://ausbildung.kurtn3x.xyz"
                target="_blank"
                >ausbildung.kurtn3x.xyz</a
              >
            </div>
            <div class="row justify-center q-mt-md text-h6 text-center">
              Education / IT-Apprenticeship-Content
            </div>
            <q-separator class="q-mt-lg q-mb-lg" inset />
            <div class="text-h5 text-center text-weight-bolder">
              <a
                class="text-blue"
                href="https://about.kurtn3x.xyz"
                target="_blank"
                >about.kurtn3x.xyz</a
              >
            </div>
            <div class="row justify-center q-mt-md text-h6 text-center q-mb-lg">
              This Page
            </div>
          </div>
        </q-card>
      </q-tab-panel>

      <q-tab-panel name="socials" class="row justify-center">
        <q-card
          bordered
          flat
          :class="darkmode ? 'bg-page-dark' : 'bg-white'"
          class="q-ma-md"
          style="width: 700px"
        >
          <div class="q-ma-sm">
            <div class="text-h2 text-center q-mt-lg text-weight-bolder">
              Socials
            </div>
            <q-separator class="q-mt-lg q-mb-lg" inset />
            <div class="text-h4 text-center text-weight-bolder">Github</div>
            <div class="row justify-center q-mt-md text-h5 q-mb-lg">
              <a
                class="text-blue"
                href="https://github.com/kurtn3x"
                target="_blank"
                >kurtn3x</a
              >
            </div>
          </div>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLocalStore } from 'stores/localStore';
import { ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const localStore = useLocalStore();
    const darkmodeToogle = ref(localStore.darkmodeState);

    return {
      darkmodeToogle,
      localStore,
      tab: ref('contact'),
    };
  },
  computed: {
    darkmode() {
      return this.localStore.darkmodeState;
    },
  },
  watch: {
    darkmode(newVal) {
      this.darkmodeToogle = newVal;
    },
  },
  methods: {
    darkmodeChanged() {
      this.localStore.darkmode = !this.darkmodeToogle;
    },

    copyToClipboard(text: string) {
      navigator.clipboard.writeText(text);
    },
  },
});
</script>

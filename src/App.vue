<template>
  <v-app>
    <page-header />
    <v-content>
      <v-sheet
        id="scrolling-techniques"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-content>
    <page-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {
    PageHeader: () => import("@/components/core/Header.vue"),
    PageFooter: () => import("@/components/core/Footer.vue")
  },

  data: () => ({
    //
  })
});
</script>

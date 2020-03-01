<template>
  <v-card class="overflow-hidden">
    <v-app-bar app absolute shrink-on-scroll prominent>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>CSP URI Report</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  components: {
    //
  },
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" }
    ],
    right: null
  })
});
</script>

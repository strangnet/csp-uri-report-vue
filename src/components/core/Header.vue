<template>
  <nav>
    <v-navigation-drawer app v-model="drawer" clipped color="grey lighten-4">
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app class="primary" flat clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <header-logo />

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Header",
  components: {
    HeaderLogo: () => import("@/components/core/Logo.vue")
  },
  data: () => ({
    items: [
      { title: "Home", icon: "mdi-home", route: "/" },
      { title: "Reports", icon: "mdi-table", route: "/reports" },
      { title: "About", icon: "mdi-information", route: "/about" }
    ],
    right: false,
    drawer: true
  })
});
</script>

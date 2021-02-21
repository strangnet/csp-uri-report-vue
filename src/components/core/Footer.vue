<template>
  <v-card height="80">
    <v-footer absolute class="font-weight-medium">
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} &mdash; csp-uri-report
      </v-col>
    </v-footer>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Footer",
  components: {
    //
  },
  data: () => ({
    //
  })
});
</script>

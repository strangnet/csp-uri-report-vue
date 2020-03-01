<template>
  <v-container>
    <h1 class="display-1">Reports</h1>
    <report-list-data />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    ReportListData: () => import("@/components/report/ReportListData.vue")
  },

  data: () => ({
    //
  })
});
</script>

<style lang="scss" scoped>
//
</style>

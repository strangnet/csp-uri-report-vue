<template>
  <v-data-table
    :headers="headers"
    :items="reports"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import ReportsService from "@/services/reports";
export default Vue.extend({
  name: "ReportListData",
  components: {
    //
  },
  computed: {
    reports() {
      return this.$store.state.reports;
    }
  },
  data: () => ({
    headers: [
      {
        text: "Time",
        align: "start",
        value: "createdAt"
      },
      {
        text: "User Agent",
        value: "userAgent",
        sortable: false
      },
      {
        text: "Blocked URI",
        value: "blockedURI",
        sortable: false
      },
      {
        text: "Document URI",
        value: "documentURI",
        sortable: false
      }
    ]
  }),
  created: () => {
    ReportsService.getReports().then(res => console.log(res));
  }
});
</script>

<style lang="scss" scoped>
//
</style>

<template>
  <v-data-table
    :headers="headers"
    :items="reports"
    :items-per-page="5"
    class="elevation-1"
  >
    <template #item.userAgent="{item}">
      <UserAgentListDisplay :userAgent="item.userAgent" />
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import ReportsService from "@/services/reports";
import UserAgentListDisplay from "@/components/report/UserAgentListDisplay.vue";

export default Vue.extend({
  name: "ReportListData",
  components: {
    UserAgentListDisplay
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
        text: "Browser",
        value: "userAgent",
        sortable: false
      },
      {
        text: "Blocked URI",
        value: "blockedUri",
        sortable: false
      },
      {
        text: "Document URI",
        value: "documentUri",
        sortable: false
      }
    ]
  }),
  created() {
    ReportsService.getReports().then(
      res => (this.$store.state.reports = res.data)
    );
  }
});
</script>

<style lang="scss" scoped>
//
</style>

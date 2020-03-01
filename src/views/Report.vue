<template>
  <v-container fluid>
    <h1 class="display-2">Report {{ $route.params.id }}</h1>
    {{ report.userAgent }}
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import ReportsService from "@/services/reports";
export default Vue.extend({
  name: "Report",
  components: {
    //
  },
  data: () => ({
    report: {}
  }),
  methods: {
    loadReport() {
      ReportsService.getReport(this.$route.params.id)
        .then(res => (this.report = res.data))
        .catch(err => console.error(err));
    }
  },
  created() {
    this.loadReport();
  }
});
</script>

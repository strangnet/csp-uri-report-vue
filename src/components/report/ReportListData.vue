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
export default Vue.extend({
  name: "ReportListData",
  components: {
    //
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
    ],
    reports: [
      {
        id: "a880f3dc-5b99-4007-9d41-f95f15d006af",
        createdAt: "2020-03-01T12:31:19.511041+01:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
        blockedURI:
          "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
        documentURI: "http://localhost:8080/"
      },
      {
        id: "c624b529-cd00-4153-a8c5-0f1a4c527b94",
        createdAt: "2020-03-01T12:31:19.511041+01:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
        blockedURI:
          "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
        documentURI: "http://localhost:8080/"
      },
      {
        id: "2de62bbb-7503-4b94-b194-76f08292b3b9",
        createdAt: "2020-03-01T12:31:19.511041+01:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
        blockedURI:
          "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
        documentURI: "http://localhost:8080/"
      },
      {
        id: "a6d5d112-5d2d-4b68-8827-30af053489a6",
        createdAt: "2020-03-01T12:31:19.511041+01:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
        blockedURI:
          "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
        documentURI: "http://localhost:8080/"
      },
      {
        id: "7b2d8d71-fe74-4332-bbd1-7564b07d676b",
        createdAt: "2020-03-01T12:31:19.511041+01:00",
        userAgent:
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36",
        blockedURI:
          "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js",
        documentURI: "http://localhost:8080/"
      }
    ]
  })
});
</script>

<style lang="scss" scoped>
//
</style>

<template>
  <span :title="browser">
    {{ browser.client.name }} {{ browser.client.version }},
    {{ browser.os.name }} {{ browser.os.version }}, {{ browser.device.brand }}
    {{ browser.device.type }}
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import DeviceDetector from "device-detector-js";
import { DeviceDetectorResult } from "device-detector-js";

export default Vue.extend({
  props: ["userAgent"],
  computed: {
    browser(): DeviceDetectorResult {
      const dd = new DeviceDetector();
      const result: DeviceDetectorResult = dd.parse(this.userAgent);
      return result;
    }
  }
});
</script>

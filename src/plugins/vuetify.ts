import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#4caf50",
        secondary: "#2196f3",
        accent: "#ff5722",
        error: "#f44336",
        warning: "#ff9800",
        info: "#3f51b5",
        success: "#00bcd4"
      }
    }
  }
});

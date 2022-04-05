import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: 'sm'
  },
  theme: {
    themes: {
      light: {
        primary: '#307eff', // #E53935
        secondary: '#88c2ff', // #FFCDD2
        helpback: '#f9fff0', // #3F51B5
      },
    },
  },
});

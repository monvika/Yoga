import Vue from "vue";
import App from "./App.vue";
import {
  library
} from "@fortawesome/fontawesome-svg-core";
import {
  faClock,
  faUser,
  faLevelUpAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
  faGooglePlus,
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(faClock, faUser, faLevelUpAlt, faFacebook, faInstagram, faGooglePlus, faTwitter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
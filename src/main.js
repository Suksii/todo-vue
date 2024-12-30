import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faCalendar } from "@fortawesome/free-regular-svg-icons";

library.add(faCalendar);

const app = createApp(App);
app.mount("#app");
app.component("font-awesome-icon", FontAwesomeIcon);

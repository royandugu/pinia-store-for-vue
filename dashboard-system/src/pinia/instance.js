/*This is how we create a pinia instance and then pass that instance to our app as a plugin*/

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "../App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");

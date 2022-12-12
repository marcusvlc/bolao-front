import { createApp } from "vue";
import App from "./App.vue";
import RouterManager from "./routes";
import store, { key } from "./store";

const app = createApp(App);
app.use(RouterManager.router);
app.use(store, key);
app.mount("#app");

import { createApp } from "vue";

import App from "./App.vue";
/* 引入amfe-flexible */
import "amfe-flexible";
/* 引入样式重置文件 */
import "../node_modules/normalize.css";
/* 引入自定义vant */
import { vantSetup } from "./plugins/vant";
/* 引入自定义pinia */
import { piniasetup } from "./plugins/pinia";
/* 引入路由 */
import { routersetup } from "./router";
/* 封装挂载全局 */
import * as api from "./requestUrl/api.js";

function bootstrap() {
  const app = createApp(App);
  vantSetup(app);
  piniasetup(app);
  routersetup(app);

  app.mount("#app");
  app.config.globalProperties.$API = api;
}
bootstrap();

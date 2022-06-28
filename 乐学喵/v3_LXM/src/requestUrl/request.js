import axios from "axios";
import { router } from "../router/index";
import { Toast } from "vant";
const requestHttp = axios.create({
  baseURL: "https://www.lexuemiao.com/api/app",
  timeout: 3000,
});
requestHttp.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (config.goBack && !token) {
      router.push("/enroll");
    } else {
      config.headers.zywxtoken = "zywx" + token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
requestHttp.interceptors.response.use(
  (res) => {
    // console.log();
    if (res.data.code == 200) {
      Toast.clear();
    }
    // console.log();
    // let token = localStorage.getItem("token");
    // if (res.config.url == "/collect") {
    // }
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default requestHttp;

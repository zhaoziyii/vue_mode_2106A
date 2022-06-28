import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/index",
    },
    {
      path: "/indexView",
      name: "indexView",
      component: () => import("../views/indexView.vue"),
      children: [
        {
          path: "/index",
          name: "index",
          component: () => import("../views/index.vue"),
        },
        {
          path: "/wdk",
          name: "wdk",
          meta: {
            goBack: true,
          },
          component: () => import("../views/wdk/wdk.vue"),
        },
        {
          path: "/miao",
          name: "miao",
          component: () => import("../views/miao.vue"),
        },
        {
          path: "/my",
          name: "my",
          component: () => import("../views/my/index.vue"),
        },
      ],
    },

    {
      path: "/search",
      name: "search",
      component: () => import("../views/search.vue"),
    },
    {
      path: "/Detail",
      name: "Detail",
      meta: {
        flag: 0,
      },
      component: () => import("../views/Detail/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/my/login/index.vue"),
    },
    {
      path: "/enroll",
      name: "enroll",
      component: () => import("../views/my/enroll/index.vue"),
    },
    {
      path: "/updataPassword",
      name: "updataPassword",
      component: () => import("../views/my/updataPassword/index.vue"),
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("../views/my/setting/index.vue"),
    },
    {
      path: "/gofreeofCharge",
      name: "gofreeofCharge",
      component: () => import("../views/my/gofreeofCharge/index.vue"),
    },
    {
      path: "/personal",
      name: "personal",
      component: () => import("../views/my/personal/index.vue"),
    },
    {
      path: "/touxiang",
      name: "touxiang",
      component: () => import("../views/personage/touxiang.vue"),
    },
    {
      path: "/arrange",
      name: "arrange",
      meta: {
        goBack: true,
      },
      component: () => import("../views/Detail/arrange/index.vue"),
    },
    {
      path: "/upmessage",
      name: "upmessage",
      component: () => import("../views/my/personal/children/upmessage.vue"),
    },
    {
      path: "/upSex",
      name: "upSex",
      component: () => import("../views/my/personal/children/upSex.vue"),
    },
    {
      path: "/upcareer",
      name: "upcareer",
      component: () => import("../views/my/personal/children/upcareer.vue"),
    },
    {
      path: "/kb",
      name: "kb",
      component: () => import("../views/wdk/children/kb.vue"),
    },
    {
      path: "/Aqrz",
      name: "Aqrz",
      component: () => import("../views/my/setting/children/Aqrz.vue"),
    },
    {
      path: "/uptel",
      name: "uptel",
      component: () => import("../views/my/setting/children/uptel.vue"),
    },
    {
      path: "/upPassword",
      name: "upPassword",
      component: () => import("../views/my/setting/children/upPassword.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  let { goBack } = to.meta;
  let token = localStorage.getItem("token");
  if (goBack) {
    if (!token) {
      next("/enroll");
    } else {
      next();
    }
  } else {
    next();
  }
  // let a = from.path;
  // if (to.path == "/enroll") {
  //   console.log(a);
  //   // router.path(a);
  // }
});

export { router };
export function routersetup(app) {
  app.use(router);
}

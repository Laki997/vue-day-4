import Vue from "vue";
import VueRouter from "vue-router";

import AddMovie from "../components/AddMovie";
import AppLogin from "../components/AppLogin";
import Movies from "../components/Movies";
import { globalAuthGuard } from "../guards/auth.guard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/add",
    name: "add",
    component: AddMovie,
  },
  {
    path: "/logout",
    component: AppLogin,
    redirect: "/login",
    meta: { authRequired: true },
  },
  {
    path: "/login",
    component: AppLogin,
  },
  {
    path: "/",
    redirect: "/movies",
    meta: { authRequired: true },
  },
  {
    path: "/movies",

    component: Movies,
    meta: { authRequired: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(globalAuthGuard);

export default router;

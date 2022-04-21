import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Scene from '../views/Scene.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/scene",
  },
  {
    path: "/date",
    name: "Date",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Date.vue"),
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

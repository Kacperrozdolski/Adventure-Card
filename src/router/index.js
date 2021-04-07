import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/easy",
    name: "easy",
    // route level code-splitting
    // this generates a separate chunk (EasyMode.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "EasyMode" */ "../views/EasyMode.vue"),
  },
  {
    path: "/medium",
    name: "Medium",
    // route level code-splitting
    // this generates a separate chunk (MediumMode.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "MediumMode" */ "../views/MediumMode.vue"),
  },
  {
    path: "/hard",
    name: "HardMode",
    // route level code-splitting
    // this generates a separate chunk (EasyMode.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "EasyMode" */ "../views/HardMode.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

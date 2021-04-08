import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LevelView from "../views/LevelView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game",
    name: "game",
    component: LevelView,
    props: (route) => ({
      level: route.query.level,
      numberOfCards: route.query.numberOfCards,
    }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

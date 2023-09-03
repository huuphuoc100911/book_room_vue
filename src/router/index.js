import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "../views/Blog.vue";
import Room from "../views/Room.vue";
import RoomDetail from "../views/RoomDetail.vue";
import Contact from "../views/Contact.vue";
import Auth from "../views/Auth.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/blogs",
    name: "BlogView",
    component: Blog,
  },
  {
    path: "/rooms",
    name: "RoomView",
    component: Room,
  },
  {
    path: "/room-detail",
    name: "RoomDetail",
    component: RoomDetail,
  },
  {
    path: "/contact",
    name: "ContactView",
    component: Contact,
  },
  {
    path: "/auth",
    name: "LoginRegister",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

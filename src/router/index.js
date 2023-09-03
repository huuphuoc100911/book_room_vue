import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "../views/Blog.vue";
import Room from "../views/Room.vue";
import RoomDetail from "../views/RoomDetail.vue";
import Contact from "../views/Contact.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

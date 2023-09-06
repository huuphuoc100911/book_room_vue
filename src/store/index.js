import { createStore } from "vuex";
import location from "./modules/location";
import rooms from "./modules/rooms";
import auth from "./modules/auth";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    location,
    rooms,
    auth,
  },
});

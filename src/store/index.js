import { createStore } from "vuex";
import location from "./modules/location";
import rooms from "./modules/rooms";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    location,
    rooms,
  },
});

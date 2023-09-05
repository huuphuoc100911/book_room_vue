import { getListLocationAPI } from "@/api/location";

const state = () => {
  return {
    locationList: [],
  };
};

const mutations = {
  setLocationMutation(state, payload) {
    state.locationList = payload;
  },
};

const actions = {
  async getLocationListAction(context, payload) {
    const data = await getListLocationAPI(payload);
    context.commit("setLocationMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

import { getListTicketByUserAPI } from "@/api/tickets";

const state = () => {
  return {
    listTicketByUser: {},
  };
};

const mutations = {
  setListTicketMutation(state, payload) {
    const data = payload.map((item) => ({
      _id: item._id,
      checkIn: item.checkIn,
      checkOut: item.checkOut,
      ...item.roomId,
    }));

    state.listTicketByUser = data;
  },
};

const actions = {
  async getListTicketByUserAction({ commit }, payload) {
    const data = await getListTicketByUserAPI(payload);
    commit("setListTicketMutation", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

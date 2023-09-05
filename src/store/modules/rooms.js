import {
  getReviewRoomAPI,
  getRoomDetailAPI,
  getRoomListByLocationAPI,
} from "@/api/rooms";

const state = () => {
  return {
    roomList: [],
    roomDetail: {},
    reviewList: {},
  };
};

const mutations = {
  setRoomListMutation(state, payload) {
    state.roomList = payload;
  },
  setRoomDetailMutation(state, payload) {
    state.roomDetail = payload;
  },
  setReviewRoomMutation(state, payload) {
    state.reviewList = payload;
  },
};

const actions = {
  async getRoomListAction(context, payload) {
    const data = await getRoomListByLocationAPI(payload);
    context.commit("setRoomListMutation", data);
  },
  async getRoomDetailAction({ commit }, payload) {
    const roomDetail = await getRoomDetailAPI(payload);
    commit("setRoomDetailMutation", roomDetail);
  },
  async getReviewRoomAction({ commit }, payload) {
    const reviewList = await getReviewRoomAPI(payload);
    commit("setReviewRoomMutation", reviewList);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
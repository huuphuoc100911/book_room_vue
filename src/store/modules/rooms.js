import {
  bookingRoomAPi,
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
  async bookingRoomAction({ commit }, { data, router }) {
    const { userDetail } = await bookingRoomAPi(data);
    router.push(`/user-profile/${userDetail._id}`);
    console.log(commit);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

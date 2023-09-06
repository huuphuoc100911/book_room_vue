import { signUpAPI } from "@/api/auth";

const state = () => {
  return {
    userRegister: {},
  };
};

const mutations = {
  setUserRegisterMutation(state, payload) {
    state.userRegister = payload;
  },
};

const actions = {
  async signUpAction({ commit }, { data, router }) {
    const userRegister = await signUpAPI(data);
    router.push("/sign-in");
    commit("setUserRegisterMutation", userRegister);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
